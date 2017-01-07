<template>
  <div class="pagination">
    <ul>
      <li @click='pre'> < </li>
      <li v-for='item in pageShowArray' @click='itemClick(item)' v-bind:class="{active: item === currentIndex}">{{item}}</li>
      <li @click='next'> > </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mvue-page',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    }, 
    currentChange: {
      type: Function
    }
  },
  mounted () {
    this.insertPage()
  },

  data () {
    return {
      currentIndex: this.current,
      pageShowArray: [],
      displayCount: 7
    }
  },

  methods: {
    insertPage () {
      let self = this
      self.pageShowArray = []

      for (var i = 1; i <= self.total; i++) {
        this.pageShowArray.push(i)
      }
      // 小型分页
      if (this.total <= this.displayCount) { return; }
      let begin = this.currentIndex - 3 
      let end = this.currentIndex + 3

      begin = begin <= 1 ? 1 : begin
      end = end <= this.displayCount ? this.displayCount : end
      begin = begin >= this.total - this.displayCount ? this.total - this.displayCount : begin
      end = end >= this.total ? this.total : end

      let arr = this.pageShowArray.slice(begin - 1, end)
      this.$set(this, 'pageShowArray', arr)
    },

    pre () {
      if (this.currentIndex <= this.displayCount) {return;}
      this.setIndex(this.currentIndex - this.displayCount)
      this.insertPage()
    },

    next () {
      if (this.currentIndex >= this.total) {return;}
      this.setIndex(this.currentIndex + this.displayCount)
      this.insertPage()
    },

    itemClick (current) {
      this.setIndex(current)
      this.insertPage()
      this.currentChange(current)
    },
    setIndex (current) {
      let temp = current
      if (temp <= 1) { temp = 1}
      if (temp >= this.total) { temp = this.total}
      this.$set(this, 'currentIndex', temp)
    }
  }
}

</script>

<style lang="stylus" scoped>
$color = rgba(65, 182, 131, .5)
  
li
  list-style none
  display inline-block
  margin 5px -0.5px
  border 1px solid #2c3e50
  padding 5px
  min-width 30px
  min-height 30px
  line-height 200%
  cursor pointer
  transition all 0.3s
  user-select none

.active, li:hover
  background-color $color
  color #ffffff
  border-color $color
  
a
  display inline-block
  color inherit
  
.clearfix
  clear both
</style>