<template>
  <div id="sort">
    <div class="sort_header">
      <span class="category" :class="{active:$route.path==='/sort/category'}" @click="goto('/sort/category')">分类</span>
      <span class="brands" :class="{active:$route.path==='/sort/brands'}" @click="goto('/sort/brands')">品牌</span>
      <i class="iconfont icon-search"></i>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--<div>
      <ul class="sort_list">
        <li class="sort_item">为你推荐</li>
      </ul>
      <div class="sort_show">
        <ul class="sort_title">

        </ul>
        <div class="sort_brad"></div>
      </div>
    </div>-->
  </div>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #sort
    width 100%
    position fixed
    .sort_header
      height 40px
      line-height 40px
      text-align center
      border-bottom 1px solid #7e8c8d
      >span
        font-size 14px
      .category
        text-align right
        padding-right 15px
      .brands
        padding-left 15px
      .icon-search
        float right
        margin-right 10px
        font-size 12px
      .active
        color red
</style>
