<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

ul,ol,li {
  list-style: none;
}

.fll {
  float: left;
}

.flr {
  float: right;
}

.clearfix::after {
  content:'';
  display: block;
  clear:both;
}

.header-wrap {
  height:52.5px;
  width: 7.2rem;
  background: #c50206;
  box-sizing: border-box;
  padding:0 10px;
  position:fixed;
  top:0;
  left:0;
  z-index: 2;
}

.title {
  font-size: 18px;
  font-weight: normal;
  color:#fff;
  line-height: 52.5px;
  /* transform: translateX(-15px); */
}

a{
  text-decoration: none;
  color:#666;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang='scss'>
.detail-wrap {
  margin-top: 52.5px;
  padding:10px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    color:#000;
    margin-bottom: 10px;
  }

  .detail-content {
    font-size: 12px;
  }
}

.detail-content {
  img {
    display:block;
    width: 6.85rem;
  }

  p {
    color: #000;
    font-size: 12px;
    line-height: 2;
    margin-top:10px;
  }

  h1,h2,h3,h4{
    font-weight: 500;
  }

  span {
    line-height: 2;
    font-size: 18px;
    color:rgb(34,34,34);
  }
}
</style>
