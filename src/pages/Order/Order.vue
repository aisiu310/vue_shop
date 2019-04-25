<template>
  <section class="containerItem">
    <Header title="订单列表"/>
    <div class="order_form">
      <img src="./images/person.png" alt="" />
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

section
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  .order_form
    position relative
    width 60%
    top 130px
    text-align center
    margin auto
    img
      width 100%
    h3
      font-size 18px
      margin-bottom 12px
      color #8a8a8a
    button
      background-color #02a774
      width 108px
      height 45px
      color #ffffff

</style>
