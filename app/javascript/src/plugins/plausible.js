import { init } from '@plausible-analytics/tracker';

export default {
  install: (app, options) => {
    init({
      ...options,
      autoCapturePageviews: true,
      outboundLinks: true,
    });

    app.provide('plausible');
  },
};
