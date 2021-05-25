import { Ref, ref } from 'vue';
import { createConsumer } from '@rails/actioncable';

type Click = {
  id: number;
  created_at: string;
  ip: string;
  user_agent: string;
};

type Clicks = { total: number; items: Click[] };

function csrfToken() {
  return (
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content') || ''
  );
}

function sendClick() {
  fetch('/clicks', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken(),
      Accept: 'application/json',
    },
  });
}

async function getClicks() {
  const response = await fetch('/clicks', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

  createConsumer().subscriptions.create(
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

  return {
    sendClick,
    receivedClicks,
  };
}
