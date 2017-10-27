import { VueDraggable } from './vue-draggable';

VueDraggable.install = function (Vue) {
  Vue.directive('drag-and-drop', {
    bind: function(el, options) {
      // override default options
      Object.assign(VueDraggable.defaultOptions, options.value);
      VueDraggable.registerListeners(el);
    },
    componentUpdated: function (el, options) {
      setTimeout( function() {
        VueDraggable.initiate(el);
      }.bind(this));
    }
  });
};

export default VueDraggable;