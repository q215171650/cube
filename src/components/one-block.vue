<!--
【功能描述】：小块
-->
<template>
  <div class="block">
    <div class="inner" :style="{ background: color }"></div>
  </div>
</template>
<script type="text/babel">
export default {
  data () {
    return {
    }
  },
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.block {
  box-sizing border-box
  width 70px
  height 70px
  padding 5px
  background #111
  border-radius 5px
  .inner {
    width 100%
    height 100%
    border-radius 5px
  }
}
</style>
