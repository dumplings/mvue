<style lang="stylus">
.pagination
    margin 0
.pagination-info
    padding 6px 12px
    border 1px solid #ccc
    border-radius 4px
</style>
<template>
    <div class="row clearfix">
        <div class="col-xs-7">
            <ul class="pagination clearfix">
                <!-- 左侧切换 -->
                <li :class="{'disabled': pageData.currentPage<=1}">
                    <a href="javascript:void(0)" aria-label="Previous" @click="selectPage(pageData.currentPage-1, pageData.currentPage<=1)">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <!-- 中间 -->
                <li v-for="n in pageShowArray"  :class="{'pageOne': true, 'active': n==pageData.currentPage}">
                    <a href="javascript:void(0)" @click="selectPage(n, n==pageData.currentPage)">{{n}}</a>
                </li>

                <li :class="{'disabled': pageData.currentPage>=pageData.totalPage}">
                    <a href="javascript:void(0)" aria-label="Next" @click="selectPage(pageData.currentPage+1, pageData.currentPage>=pageData.totalPage)">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-xs-2">
            <div class="input-group clearfix goto-div">
                <input type="text" class="form-control" :value="goToNum" v-model="goToNum">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click="gotoPage()    ">跳转</button>
                </span>
            </div>
        </div>
        <div class="col-xs-3">
            <div class="pagination-info">当前第{{pageData.currentPage}}页/总共{{pageData.totalPage}}，每页{{pageData.perPageNum}}条</div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            pageData: {
                type: Object,
                require: true
            }
        },
        ready () {

        },

        created () {
            let self = this

            self.insertPage()

            self.$watch('pageData.currentPage', function(val) {
                self.insertPage()
            })
            self.$watch('pageData.totalPage', function(val) {
                self.insertPage()
            })
        },

        data () {
            return {
                goToNum: 1,
                pageShowArray: []
            }
        },

        methods: {
            insertPage () {
                let self = this
                self.pageShowArray = []
                if(self.pageData.totalPage<=8 || self.pageData.currentPage<=4) {
                    let nowTotalPage = self.pageData.totalPage>8?8:self.pageData.totalPage
                    for(let i=1;i<=nowTotalPage;i++) {
                        self.pageShowArray.push(i);
                    }
                } else {
                    if(self.pageData.currentPage>4&&self.pageData.currentPage<=self.pageData.totalPage-4) {
                        for(let i=self.pageData.currentPage-3;i<=self.pageData.currentPage+4;i++) {
                            self.pageShowArray.push(i);
                        }
                    } else {
                        for(let i=self.pageData.totalPage-7;i<=self.pageData.totalPage;i++) {
                            self.pageShowArray.push(i);
                        }
                    }
                }
            },

            gotoPage () {
                let thisNum = parseInt(this.goToNum)
                if(thisNum > this.pageData.totalPage) {
                    this.badPageSelect(2)
                } else {
                    if(thisNum != this.pageData.currentPage) {
                        this.selectPageByNum(thisNum)
                   }
                }
            },

            selectPage (num, type) {
                if(!type) {
                    let thisNum = parseInt(num)
                    this.selectPageByNum(thisNum)
                }
            },

            badPageSelect (status) {
                this.$dispatch('bad-page-select', status)
            },

            selectPageByNum (num) {
                this.$dispatch('page-back-num', num)
            }
        }
    }

</script>
