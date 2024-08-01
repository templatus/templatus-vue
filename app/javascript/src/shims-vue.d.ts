declare module '*.vue' {
  import type { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '@rails/request.js';
declare module '@/plugins/plausible';

declare module '*.svg' {
  export default '' as string;
}
