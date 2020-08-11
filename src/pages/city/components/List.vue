<template>
  <div class="list" ref="wrapper"  >
  <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.$store.state.city}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hot" :key="item.id">
          <div class="button"  @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" @click="handle(innerItem.name)" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
 </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  methods: {
    handle (city) {
      this.$store.dispatch('changeCity', city)
      // 编程式跳转
      this.$router.push('/')
    },
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      // 编程式跳转
      this.$router.push('/')
    }
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  watch: {
    letter () {
      // better-scroll 通过了方法,如果某个元素存在，我们就可以滚到某个元素所在的区域上面。
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-block #ccc
    &:after
      border-block #ccc
.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
  .title
    line-height .54rem
    background-color #eee
    padding-left .2rem
    color #666666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        z-index 1000
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #cccccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
