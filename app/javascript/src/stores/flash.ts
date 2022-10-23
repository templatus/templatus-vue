import { defineStore } from 'pinia';

export const useFlashStore = defineStore('flash', {
  state: () => ({
    notice: '',
    alert: '',
  }),
});
