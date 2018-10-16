<template>
  <div class="header-wrap clearfix">
    <div class="header-left fll">
      <img src="../assets/logo.png">
    </div>
    <div class="header-right flr">
      <router-link to='/login'>登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
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
  
  .header-left {
    height: 52.5px;
    display:flex;
    align-items: center;
  }

  .header-left img {
    display: block;
    width: 130px;
    margin:auto 0;
  }
  
  .header-right {
    a{
      display: block;
      text-decoration: none;
      font-size: 17px;
      color:#fff;
      line-height: 52.5px;
    }
    
  }
}
</style>
