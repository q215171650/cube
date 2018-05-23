<!--
【功能描述】：
-->
<template>
  <div class="cube">
    <one-side v-for="(item, index) in sides" :key="index" :class="`side-${item.name}`" :color="item.color">
    </one-side>
  </div>
</template>
<script type="text/babel">
import oneSide from '@/components/one-side'

export default {
  data () {
    return {
      sides: [
        {
          name: 'front',
          color: '#009E60'
        },
        {
          name: 'back',
          color: '#0051BA'
        },
        {
          name: 'left',
          color: '#FF5800'
        },
        {
          name: 'right',
          color: '#C41E3A'
        },
        {
          name: 'top',
          color: '#FFFFFF'
        },
        {
          name: 'bottom',
          color: '#FFD500'
        }
      ]
    }
  },
  methods: {
  },
  components: {
    oneSide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.cube {
  transform-style preserve-3d
  animation square-animation 5s infinite
  .side {
    position absolute
    opacity .5
    &-top {
      transform translateY(-50px) rotateX(90deg)
    }
    &-bottom {
      transform  translateY(50px) rotateX(-90deg)
    }
    &-left {
      transform translateX(-50px) rotateY(90deg)
    }
    &-right {
      transform translateX(50px) rotateY(-90deg)
    }
    &-front {
      transform translateZ(50px)
    }
    &-back {
      transform translateZ(-50px)
    }
  }
}
// @keyframes square-animation{
// 	0% { 
//     transform: rotateX(0deg) rotateY(0deg)
//   }
// 	45% {
//     transform: rotateX(90deg)
//   }
// 	75% {
//     transform: rotateY(90deg)
//   }
// 	90% {
//     transform: rotateX(45deg) rotateY(45deg)
//   }
// 	100% {
//     transform: rotateX(0deg) rotateY(0deg)
//   }
// }
</style>
