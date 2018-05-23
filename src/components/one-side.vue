<!--
【功能描述】：面
-->
<template>
  <div class="side">
    <one-block class="block" v-for="item in 9" :key="item" :color="color">
      {{item}}
    </one-block>
  </div>
</template>
<script type="text/babel">
import oneBlock from './one-block'
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
  },
  components: {
    oneBlock
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.side {
  display flex
  width 210px
  flex-wrap wrap
  .block {

  }
}
</style>
