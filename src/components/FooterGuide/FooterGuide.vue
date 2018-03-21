<template>
  <div id="footerGuide" >
    <ul class="footer">
      <li class="msite" :class="{active:$route.path==='/msite'}"
          @click="goto('/msite')">
        <i class="iconfont icon-wxbmingxingdianpu"></i>
        <span class="footer_text">首页</span>
      </li>
      <li class="sort" :class="{active:$route.path==='/sort'}"
          @click="goto('/sort')">
        <i class="iconfont icon-category"></i>
        <span class="footer_text">分类</span>
      </li>
      <li class="shopcart" @click="goto('/cart')">
        <i class="iconfont icon-cart"></i>
        <span class="footer_text">购物车</span>
      </li>
      <li class="login" @click="goto('/login')">
        <i class="iconfont icon-smile"></i>
        <span class="footer_text">我的</span>
      </li>
    </ul>
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
  #footerGuide
    position fixed
    bottom 0
    height 45px
    width 100%
    background #fff
    padding-top 5px
    .footer
      display flex
      justify-content space-around
      width 100%
      height 100%
      >li
        width 42px
        height 40px
        .iconfont
          display block
          font-size 24px
          text-align center
          margin-bottom 4px
        .footer_text
          display block
          font-size 10px
          text-align center
        &.active
          color #82BF77
      /*.msite
        background-image url("./images/footer.png")
        background-position 0 0
        background-size 234px 163px
      .sort
        background-image url("./images/footer.png")
        background-position -85px -41px
        background-size 234px 163px
      .shopcart
        background-image url("./images/footer.png")
        background-position -85px -81px
        background-size 234px 163px
      .login
        background-image url("./images/footer.png")
        background-position -85px -122px
        background-size 234px 163px*/
</style>
