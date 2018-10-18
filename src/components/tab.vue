<template>
  <div class="tab-wrap clearfix">
    <div class="left fll" :class="{active1:this.$route.name == 'index'}">
      <router-link to="/layout/index">
        <span>首页</span>
      </router-link>
      
    </div>
    <div class="center fll" :class="{active2:this.$route.name == 'notice'}">
      <router-link to="/layout/notice">
        <span>通知早知道</span>
      </router-link>
      
    </div>
    <div class="right fll" :class="{active3:this.$route.name == 'person'}">
      <router-link to="/layout/person">
        <span>我的党建</span>
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name:'tab',
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
.tab-wrap {
  width: 7.2rem;
  height: 54.5px;
  position:fixed;
  background: #fff;
  z-index: 2;
  text-align: center;
  bottom: 0;
  left:0;
  right:0;

    .left,.center,.right {
    width: 33%;
    height: 54.5px;
    text-align: center;

    a {
      padding-top:26px;
      display: block;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 12px;
        color:#888;
        margin-top:5px;
      }

    }

  }

  .left {
    a {
      background-image: url('../assets/index/党_grey.png');
      background-repeat: no-repeat;
      background-position: center 5px;
      background-size: (21px,26px);
    }
  }

  .center {
    a {
      background-image: url('../assets/index/消息_grey.png');
      background-repeat: no-repeat;
      background-position: center 5px;
      background-size: (21px,26px);
    }
  }

  .right {
    a {
      background-image: url('../assets/index/会员_grey.png');
      background-repeat: no-repeat;
      background-position: center 5px;
      background-size: (18px,20px);
    }
  }

  a{
    & {
      border-top:2px solid #fff;
    }
  }

  .active1  {
    a{
      border-color:#c7000a; 
      background: url('../assets/index/党_red.png') no-repeat center 5px;
      background-size: (21px,26px);

      span {
        color:#c7000a;
      }
    }
  }

  .active2  {
    a{
      border-color:#c7000a; 
      background: url('../assets/index/消息_red.png') no-repeat center 5px;
      background-size: (21px,26px);

      span {
        color:#c7000a;
      }
    }
  }

  .active3  {
    a{
      border-color:#c7000a; 
      background: url('../assets/index/会员_red.png') no-repeat center 5px;
      background-size: (18px,20px);

      span {
        color:#c7000a;
      }
    }
  }
}


</style>
