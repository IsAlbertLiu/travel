<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" srcset="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
      id: '001',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
      title: '天坛公园',
      desc: '非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩'
    }, {
      id: '002',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
      title: '天坛公园',
      desc: '非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩'
    }, {
      id: '003',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
      title: '天坛公园',
      desc: '非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩，非常好玩'
    }]
    }
    
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl';
  .title
    line-height .4rem
    background #eeeeee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
