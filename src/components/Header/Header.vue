<template>
  <div class="top">
    <slot name="left"></slot>
    <span class="site">
      <p class="site-text">{{title}}</p>
    </span>
    <slot name="right"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .search
      position: absolute
      left 15px
      top 10px
      color #fff
      i
        font-size 25px
    .site
      width 50%
      position: absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      color #fff
      margin-left: -5%;
      text-align center
      .site-text
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color #fff
        font-size: 20px
    .login
      position: absolute
      right 15px
      top 50%
      transform translateY(-50%)
      font-size 16px
      color #fff
</style>
