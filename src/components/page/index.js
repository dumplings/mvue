import Page from './Page.vue';

Page.install = function(Vue) {
  Vue.component(Page.name, Page);
};

export default Page;