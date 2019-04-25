<template>
  <section class="containerItem">
      <Header title="搜索"/>
      <form class="search_form" action="#">
        <input
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
        />
        <input type="submit" name="submit" class="submit" />
      </form>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.containerItem
  overflow hidden
  .search_form
    margin-top 45.5px
    width 100%
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
    .search
      float left
      width 78%
      border 4px solid #f2f2f2
      font-size 14px
      color #333
      background-color #f2f2f2
    .submit
      float right
      width 18%
      border 4px solid #02a774
      font-size 16px
      color #fff
      background-color #02a774
      margin-right 15px
</style>
