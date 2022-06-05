import Plausible from 'plausible-tracker';

export default {
  install: (app, options) => {
    const { enableAutoPageviews, enableAutoOutboundTracking } =
      Plausible(options);

    enableAutoPageviews();
    enableAutoOutboundTracking();

    app.provide('plausible');
  },
};
