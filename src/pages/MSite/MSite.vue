<template>
<div class="container">
  <section class="containerItem">
    <Header title="xxxx">
      <span class="search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="login" slot="right">
        <span class="login-text">登录|注册</span>
      </span>
    </Header>
    <div class="bottom">
      <!--首页导航-->
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul class="shopList">
                  <li class="shopItem">
                    <img src="./images/nav/1.jpg" alt="">
                    <span>甜品饮品</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/2.jpg" alt="">
                    <span>商超便利</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/3.jpg" alt="">
                    <span>美食</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/4.jpg" alt="">
                    <span>简餐</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/5.jpg" alt="">
                    <span>新店特惠</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/6.jpg" alt="">
                    <span>准时达</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/7.jpg" alt="">
                    <span>预定早餐</span>
                  </li>
                  <li class="shopItem">
                    <img src="./images/nav/8.jpg" alt="">
                    <span>土豪推荐</span>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                  <ul class="shopList">
                    <li class="shopItem">
                      <img src="./images/nav/9.jpg" alt="">
                      <span>甜品饮品</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/10.jpg" alt="">
                      <span>商超便利</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/11.jpg" alt="">
                      <span>美食</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/12.jpg" alt="">
                      <span>简餐</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/13.jpg" alt="">
                      <span>新店特惠</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/14.jpg" alt="">
                      <span>准时达</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/13.jpg" alt="">
                      <span>预定早餐</span>
                    </li>
                    <li class="shopItem">
                      <img src="./images/nav/11.jpg" alt="">
                      <span>土豪推荐</span>
                    </li>
                  </ul>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
      <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    mounted () {
      new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      })
    },
    components: {
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container
    position relative
    width 100%
    height 100%
    section
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      .swiper-container
        bottom-border-1px(#ccc)
        width 100%
        height 210px
        background-color #fff
        margin-top 45.5px
        .shopList
          clearFix()
          li
            float left
            margin 10px 0
            display flex
            align-items center
            flex-direction column
            justify-content space-around
            width 25%
            font-size 16px
            img
              width 50px
              height 50px
              margin-bottom: 10px
        .swiper-pagination-bullet-active
          background-color #02a774
      .shop_header
        top-border-1px(#eee)
        background-color #fff
        padding  14px 14px 18px 0
        top 14px
        .icon-xuanxiang
          margin-left  14px
        .shop_header_title
          font-size 14px
          color #acacac
</style>
