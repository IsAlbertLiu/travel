<template>
<div class="wrapper">
 <div class="back-icon">
   <span class="iconfont">&#xe624;</span>
</div>
<div class="search">
   输入城市/景点/游玩主题
   <span class="iconfont search-icon">&#xe632;</span>
</div>
<div class="city">
   黄冈
   <span class="iconfont">&#xe64a;</span>
</div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
.wrapper
     height .64rem
     background #00bcd4
     color white
     line-height .64rem
 .back-icon
     float left
     width .64rem
     text-align center
 .search
     float left
     height  .44rem
     background #fff
     color gray
     line-height .44rem
     border-radius .1rem
     margin  .1rem .1rem
     font-size .2rem
     padding  0 2rem
     position relative
     .search-icon
         position absolute
         left .1rem
         top 0rem
 .city
     width 1rem
     float right
</style>
