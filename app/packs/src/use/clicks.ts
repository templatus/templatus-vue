import { Ref, ref, onBeforeUnmount } from 'vue';
import { createConsumer } from '@rails/actioncable';
import { metaContent } from '@/utils/metaContent';

export type Click = {
  id: number;
  created_at: string;
  ip: string;
  user_agent: string;
};

type Clicks = { total: number; items: Click[] };

function sendClick() {
  fetch('/clicks', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': metaContent('csrf-token') || '',
    },
  });
}

async function getClicks() {
  const response = await fetch('/clicks.json', {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });
  return await response.json();
}

export default function useClicks(): {
  sendClick: () => void;
  receivedClicks: Ref<Clicks>;
} {
  const receivedClicks = ref<Clicks>({ total: -1, items: [] });

  getClicks().then((clicks) => {
    receivedClicks.value = clicks;
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
