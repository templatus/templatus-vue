import { Ref, ref, onBeforeUnmount } from 'vue';
import { createConsumer } from '@rails/actioncable';
import { get, post } from '@rails/request.js';

export type Click = {
  id: number;
  created_at: string;
  ip: string;
  user_agent: string;
};

type Clicks = { total: number; items: Click[] };

function sendClick(): void {
  post('/clicks').catch((err: Error) => alert(err));
}

async function getClicks(): Promise<Clicks> {
  const response = await get('/clicks.json', {
    responseKind: 'json',
  });
  return await response.json;
}

export default function useClicks(): {
  sendClick: () => void;
  receivedClicks: Ref<Clicks>;
} {
  const receivedClicks = ref<Clicks>({ total: -1, items: [] });

  getClicks()
    .then((clicks: Clicks) => {
      receivedClicks.value = clicks;
    })
    .catch((err: Error) => {
      alert(err);
    });

  const channel = createConsumer().subscriptions.create(
    {
      channel: 'ClicksChannel',
    },
    {
      received(click: Click) {
        receivedClicks.value.total += 1;
        receivedClicks.value.items.unshift(click);
      },
    },
  );

  onBeforeUnmount(() => {
    channel.unsubscribe();
    channel.consumer.disconnect();
  });

  return {
    sendClick,
    receivedClicks,
  };
}
