<template>
  <div id="app">
    <img src="./assets/logo.png">
    <page :pageData=pageData></page>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Page from './components/Page'

export default {
  name: 'app',
  components: {
    Hello,
    Page
  },
  data () {
    return {
      pageData: {
        currentPage: 2,
        perPageNum: 20,
        totalPage: 2
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
