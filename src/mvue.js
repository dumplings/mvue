import Page from './components/page';
import Tree from './components/tree'

const mvue = {
  Page,
  Tree
};

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(Page.name, Page);
  Vue.component(Tree.name, Tree);
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.1',
  install,
  Page,
  Tree
}