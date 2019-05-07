<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    async mounted () {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')

    },
    components: {
      FooterGuide

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
