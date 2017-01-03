### page 分页

| 参数           | 说明           | 类型   | 默认值 |
| ------------- |-------------| ----- | --- |
| current      | 当前选中索引 | Number | 1 |
| total     | 总条目数      | Number | 1 |
| currentChange | 索引更改回调    | Function | - |


### 使用
``` javascript
<template>
  <div id="app">
    <mvue-page :current="2" :total="40" :currentChange='currentChange'></mvue-page>
  </div>
</template>

<script>
import {Page} from 'mvue'
import Vue from 'vue'
Vue.component(Page.name, Page);
export default {
  name: 'app',
  methods: {
    currentChange: function(current) {
      console.log(current);
    }
  }
}
</script>
```
