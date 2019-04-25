<template>
  <div class="con">
    <ul class="conList">
      <li class="conItem">
          <img src="./images/shop/1.jpg" alt="">
        <div class="conList_con">
          <div class="shop_title">
            <h4 class="shop_title_text">
                锄禾日当午，汗滴禾下土
            </h4>
            <ul class="shop_title_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </div>
          <div class="shop_rating">
            <div class="shop_rating_left">
                <ul class="starList">
                  <li class="starItem on"></li>
                  <li class="starItem"></li>
                  <li class="starItem"></li>
                  <li class="starItem"></li>
                  <li class="starItem"></li>
                </ul>
                <span class="starNum">4.5</span>
                <div class="starText">月售106单</div>
            </div>
                <div class="shop_rating_right">
                  <span class="delivery_left">硅谷专送</span>
                  <span class="delivery_right">准时达</span>
                </div>
          </div>
          <div class="shop_price">
            <span>&yen;20元起送</span>
            <span>/</span>
            <span>配送费约&yen;5</span>
          </div>
        </div>

      </li>
      <li class="conItem">
          <img src="./images/shop/2.jpg" alt="">
        <div class="conList_con">
          <div class="shop_title">
            <h4 class="shop_title_text">
                锄禾日当午，汗滴禾下土
            </h4>
            <ul class="shop_title_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </div>
          <div class="shop_rating">
            <div class="shop_rating_left">
                <ul class="starList">
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                  </ul>
                  <span class="starNum">3.5</span>
                  <div class="starText">月售106单</div>
                </div>
                <div class="shop_rating_right">
                  <span class="delivery_left">硅谷专送</span>
                  <span class="delivery_right">准时达</span>
                </div>
          </div>
          <div class="shop_price">
            <span>&yen;20元起送</span>
            <span>/</span>
            <span>配送费约&yen;5</span>
          </div>
        </div>
      </li>
      <li class="conItem">
          <img src="./images/shop/3.jpg" alt="">
        <div class="conList_con">
          <div class="shop_title">
            <h4 class="shop_title_text">
                锄禾日当午，汗滴禾下土
            </h4>
            <ul class="shop_title_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </div>
          <div class="shop_rating">
            <div class="shop_rating_left">
                <ul class="starList">
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                  </ul>
                  <span class="starNum">3.5</span>
                  <div class="starText">月售106单</div>
                </div>
                <div class="shop_rating_right">
                  <span class="delivery_left">硅谷专送</span>
                  <span class="delivery_right">准时达</span>
                </div>
          </div>
          <div class="shop_price">
            <span>&yen;20元起送</span>
            <span>/</span>
            <span>配送费约&yen;5</span>
          </div>
        </div>
      </li>
      <li class="conItem">
          <img src="./images/shop/4.jpg" alt="">
        <div class="conList_con">
          <div class="shop_title">
            <h4 class="shop_title_text">
                锄禾日当午，汗滴禾下土
            </h4>
            <ul class="shop_title_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </div>
          <div class="shop_rating">
            <div class="shop_rating_left">
                <ul class="starList">
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                    <li class="starItem"></li>
                  </ul>
                  <span class="starNum">3.5</span>
                  <div class="starText">月售106单</div>
                </div>
                <div class="shop_rating_right">
                  <span class="delivery_left">硅谷专送</span>
                  <span class="delivery_right">准时达</span>
                </div>
          </div>
          <div class="shop_price">
            <span>&yen;20元起送</span>
            <span>/</span>
            <span>配送费约&yen;5</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data	() {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .con
    background-color #fff
    .conList
      width 100%
      .conItem
        display flex
        height 100px
        margin  12px 10px 15px 10px
        bottom-border-1px(#ddd)
        img
          width 70px
          height 70px
          margin-right 10px
        .conList_con
          flex 1
          .shop_title
            width 100%
            clearFix()
            h4
              float left
              width 140px
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size 16px
              font-weight 700
              color #000
              &::before
                content '品牌'
                display inline-block
                font-size 12px
                background-color #ffd930
                padding 2px
                margin-right 5px
                border-radius 2px
            .shop_title_ul
              float right
              .supports
                float left
                color #999999
                border 1px solid #f1f1f1
                padding 0 2px
                font-size 12px
                border-radius 2px
          .shop_rating
            width 100%
            margin 14px 0
            clearFix()
            .shop_rating_left
              font-size 12px
              float left
              .starList
                float left
                clearFix()
                .starItem
                  float left
                  width 10px
                  height 10px
                  background-size 10px 10px
                  margin-right 4px
                  &.on
                    bg_image('./images/stars/star24_on')
                  &.half
                    bg_image('./images/stars/star24_half')
                  &.off
                    bg_image('./images/stars/star24_off')
              .starNum
                float left
                margin-right 4px
                color #ff9454
              .starText
                float left
                color #666666
            .shop_rating_right
              float right
              transform-origin 35px 0
              margin-right -18px
              transform scale(0.7)
              display inline-block
              font-size 10px
              padding 1px
              border-radius: 2px
              .delivery_left
                background-color #02a774
                border 1px solid #02a774
                color #fff
              .delivery_right
                border 1px solid #02a774
                color #02a774
                margin-left: 5px;
          .shop_price
            font-size 10px
            color #666
</style>
