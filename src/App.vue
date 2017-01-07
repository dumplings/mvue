<template>
  <div id="app">
    <img src="./assets/logo.png">
    <mvue-page :current="2" :total="40" :currentChange='currentChange'></mvue-page>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vue from 'vue'
import {Page} from '../dist/mvue.js'
Vue.use(Page);
// or
// import mvue from '../dist/mvue.js'
// Vue.use(mvue);

export default {
  name: 'app',
  methods: {
    currentChange: function(current) {
      console.log('当前索引是',current);
    }
  }
}
</script>

<style lang="stylus">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
