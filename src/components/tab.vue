<template>
  <div class="tab-wrap clearfix">
    <div class="left fll" :class="{active:$route.name === 'index'}">
      <router-link to="/layout/index">
        <span>首页</span>
      </router-link>
      
    </div>
    <div class="center fll">
      <router-link to="/layout/notice">
        <span>通知早知道</span>
      </router-link>
      
    </div>
    <div class="right fll">
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
      selected:true
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
  // padding-top: 2px;
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
    // border-top:2px solid black;

    

    a{
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
      background-size: (21px,22px);
    }
  }

  a{
    & {
      border-top:2px solid #fff;
    }
  }

  a:hover {
    & {
      border-top:2px solid #c7000a;
    }

    span {
      color:#c7000a;
    }
  }

  .left a:hover {
    & {
      background-image:url('../assets/index/党_red.png');
    }
  }

  .center a:hover {
    & {
      background-image:url('../assets/index/消息_red.png');
    }
  }

  .right a:hover {
    & {
      background-image:url('../assets/index/会员_red.png');
    }
  }

}
</style>
