<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyWord" >
        <ul >
          <li class="search-item border-bottom" v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          >{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      // 节流操作
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      // 编程式跳转
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {mouseWheel: true, click: true, tap: true})
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 判断，如果输入框的内容为空，则清除搜索显示的城市列表
      if (this.keyWord === '') {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  // @import '~styles/varibles.styl'
  // .search
  //   height .72rem
  //   padding 0 .1rem
  //   background $bgColor
  //   .search-input
  //     box-sizing border-box
  //     width 100%
  //     height .62rem
  //     line-height .62rem
  //     text-align center
  //     border-radius .06rem
  //     color #666666
  //     padding 0 .1rem
  // .search-content
  //   z-index 1
  //   overflow hidden
  //   position absolute
  //   top 1.58rem
  //   left 0
  //   right 0
  //   bottom 0
  //   background #eeeeee
  //   .search-item
  //     overflow hidden
  //     line-height .62rem
  //     padding-left .2rem
  //     background #ffffff
  //     color #666
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
