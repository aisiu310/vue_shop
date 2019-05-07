<template>
<div class="container">
  <section class="containerItem">
    <Header :title="address.name || '正在获取中...'">
      <span class="search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="login" slot="right">
        <span class="login-text">登录|注册</span>
      </span>
    </Header>
    <div class="bottom">
      <!--首页导航-->
      <div class="swiper-container" v-if="categorys.length>0">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys, index) in categorysList" :key="index">
                <ul class="shopList" >
                  <li class="shopItem" v-for="(c, index) in categorys" :key="index">
                    <img :src="'https://fuss10.elemecdn.com' + c.image_url">
                    <span>{{c.title}}</span>
                  </li>
                </ul>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
        <img src="./images/msite_back.svg" alt="back" class="bgimg" v-else>
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
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    mounted () {

      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')

    },
    computed: {
      ...mapState({
        address: state => state.msite.address,
        categorys: state => state.msite.categorys,
      }),

      categorysList() {
        const bigArr = []
        let smallArr = []

        this.categorys.forEach(c => {
          if (smallArr.length === 0) {
            bigArr.push(smallArr)
          }
          smallArr.push(c)

          if (smallArr.length === 8) {
            smallArr = []
          }
        })
        return bigArr
      }
    },
    components: {
      ShopList
    },

    watch: {
      categorys(value) {

        this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项

        // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
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
      .bgimg
          margin-top 45.5px
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
