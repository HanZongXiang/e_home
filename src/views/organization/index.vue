<template>
  <div class="organization-wrap">
    <Header :title="this.$route.meta.title"></Header>
    
    <div class="banner-wrap">
      <img src="../../assets/timg.jpg">
    </div>
    <div class="menu-list">
      <div class="row1">
        <router-link to="/politicsStudy">
          <img src="../../assets/icon1.png">
          <div>政治学习</div>
        </router-link>
        <router-link :to=" this.$store.state.userInfo.username ? '/thinkReport' : '/login'">
          <img src="../../assets/icon2.png">
          <div>思想汇报</div>
        </router-link>
        <router-link :to=" this.$store.state.userInfo.username ? '/summary' : '/login'">
          <img src="../../assets/icon3.png">
          <div>心得总结</div>
        </router-link>
      </div>
      <div class="row2">
        <router-link :to=" this.$store.state.userInfo.username ? '/lifeChioce' : '/login'">
          <img src="../../assets/icon4.png">
          <div>民主评议</div>
        </router-link>
        <router-link to="/findorg">
          <img src="../../assets/icon5.png">
          <div>流动党员找组织</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header2'

export default {
  name:'',
  data() {
    return {

    }
  },
  components: {
    Header
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.organization-wrap {
  .header-wrap {
    text-align: center;

    .icon {
      display: block;
      width: 0.36rem;
      height: 52.5px;
      text-align: left;
      background:url('../../assets/news/return_btn.png') no-repeat center center;
      background-size: (10px,10px);
    }
  }

  .banner-wrap {
    img {
      width: 7.2rem;
      margin-top: 52.5px;
    }
  }

  .menu-list {
    
    .row1,.row2 {
      display: flex;
      width: 7.2rem;
      margin-top: 10px;

      a{
        display: block;
        display: flex;
        flex-direction: column;
        flex:1;
        align-items: center;
        font-size: 14px;

        img {
          display: block;
          width: 1.6rem;
        }

        div {
          width: 1.6rem;
          text-align: center;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }

    .row2 {
      width: 4.8rem;
    }
  }
}
</style>
