import { defineStore } from 'pinia';
import type { Subscription } from '@rails/actioncable';
import consumer from '../../channels/consumer';
import { get, post } from '@/use/fetch';

export type Click = {
  id: number;
  created_at: string;
  ip: string;
  user_agent: string;
};

let channel: Subscription | null = null;

export const useClickStore = defineStore('click', {
  state: () => ({
    loaded: false,
    subscribed: false,
    total: 0,
    items: [] as Click[],
  }),

  actions: {
    sendClick() {
      post('/clicks', { responseKind: 'json' });
    },

    async getClicks() {
      const response = await get('/clicks', {
        responseKind: 'json',
      });
      const json = await response.json;

      this.total = json.total;
      this.items = json.items;
      this.loaded = true;
    },

    subscribe() {
      channel = consumer.subscriptions.create(
        {
          channel: 'ClicksChannel',
        },
        {
          received: (click: Click) => {
            this.total += 1;
            this.items.unshift(click);
          },
        },
      );
      this.subscribed = true;
    },

    unsubscribe() {
      if (channel) {
        channel.unsubscribe();
      }
      this.subscribed = false;
    },
  },
});
