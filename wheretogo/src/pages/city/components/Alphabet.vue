<template>
  <ul class="list">
    <li
      class="item"
      @click="handleLetterClick"
      v-for="item of letters"
      :key='item'
      :ref='item'
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >{{item}}</li>  <!-- .prevent修饰符，阻止默认行为 -->
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    /**
     * @msg: 点击字母跳转
     * @param {type}
     * @return:
     */
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    /**
     * @msg: 字母滚动位置跳转,节流
     * @param {type}
     * @return:
     */
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    bottom 0
    right 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
