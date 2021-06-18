/* eslint-disable */
// @ts-nocheck

// Vue3 support is currently not released by Honeybadger
// https://github.com/honeybadger-io/honeybadger-vue/issues/779
//
// As a quickfix, this is a copy from the `vue3` branch:
// https://github.com/honeybadger-io/honeybadger-vue/blob/vue3/src/index.js

import Honeybadger from '@honeybadger-io/js';

export const HoneybadgerVue = {
  install(Vue, options) {
    if (Vue.config.debug) {
      console.log(`Honeybadger configured with ${options.apiKey}`);
    }
    const honeybadger = Honeybadger.configure(options);
    Vue.$honeybadger = honeybadger;
    Vue.config.globalProperties.$honeybadger = honeybadger;
    const chainedErrorHandler = Vue.config.errorHandler;
    const extractContext = function (vm) {
      const options =
        typeof vm === 'function' && vm.cid != null
          ? vm.options
          : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm || {};
      const name = options.name || options._componentTag;
      const file = options.__file;
      return {
        isRoot: vm.$root === vm,
        name: name,
        props: options.propsData,
        parentVnodeTag: options._parentVnode
          ? options._parentVnode.tag
          : undefined,
        file: file,
      };
    };
    Vue.config.errorHandler = (error, vm, info) => {
      honeybadger.notify(error, {
        context: { vm: extractContext(vm), info: info },
      });
      if (typeof chainedErrorHandler === 'function') {
        chainedErrorHandler.call(this.Vue, error, vm, info);
      }
    };
  },
};

export default HoneybadgerVue;
