<template>
  <div id="category">
    <ul class="category_list">
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
      <li class="category_item">狗狗主粮</li>
    </ul>
    <div class="category_content"></div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #category
    overflow hidden
    .category_list
      float left
      box-sizing border-box
      width 80px
      border-right solid 5px #7e8c8d
      text-align center
      .category_item
        height: 50px
        line-height 50px
    .category_content
      float right
      background: #000;
      width 200px
      height 500px
</style>
