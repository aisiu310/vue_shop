<template>
  <footer v-show="$route.meta.showFooter">
    <ul class="foorterList">
      <li class="foorterItem" :class="{on: $route.path==='/msite'}" @click="goTo('/msite')">
        <span><i class="iconfont icon-waimai"></i></span>
        <span>外卖</span>
      </li>
      <li class="foorterItem" :class="{on: $route.path==='/search'}" @click="goTo('/search')">
        <span><i class="iconfont icon-search"></i></span>
        <span>搜索</span>
      </li>
      <li class="foorterItem" :class="{on: $route.path==='/order'}" @click="goTo('/order')">
        <span><i class="iconfont icon-dingdan"></i></span>
        <span>订单</span>
      </li>
      <li class="foorterItem" :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
        <span><i class="iconfont icon-geren"></i></span>
        <span>我的</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  // @import "../../common/iconfont/iconfont.css"
  footer
    top-border-1px(#dddddd)
    position fixed
    width 100%
    height 55px
    bottom 0
    left 0
    background-color #fff
    .foorterList
      width 100%
      height 55px
      display flex
      margin 0
      padding 0
      li
        display flex
        flex 1
        flex-direction column
        justify-content space-around
        align-items center
        &.on
          color #02a774
</style>
