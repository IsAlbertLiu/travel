<template>
<div class="header">
 <div class="header-left">
   <span class="iconfont back-icont">&#xe624;</span>
</div>
<div class="header-input">
   输入城市/景点/游玩主题
   <span class="iconfont search-icon">&#xe632;</span>
</div>
<router-link to='/city'>
<div class="header-right">
   {{this.$store.state.city}}
   <span class="iconfont arrow-icon">&#xe64a;</span>
</div>
</router-link>

</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
      @import "~styles/varibles.styl"
/*
  1rem = html fontsize 50px
*/
  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor;
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .4rem
        padding-left .4rem
    .header-input
      flex:1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
