import Page from './components/page';

const mvue = {
    Page
};

const install = function (Vue) {
    Object.keys(mvue).forEach((key) => {
      console.log(key, mvue[key]);
        Vue.component(key, mvue[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
  install,
  Page
}