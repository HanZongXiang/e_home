<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="content-wrap">
      <div class="approach">请选择支付方式</div>
      <div class="wx-pay" @click="setWxPay">
        <div class="left">
          <img src="/static/微信.png" style="width: 1rem;margin-right: 0.2rem;">
          <span>微信</span>
        </div>
        <div class="right">
          <img src="@/assets/right.png" class="right-btn">
        </div>
      </div>
      <div class="zfb-pay" @click="setAliPay">
        <div class="left">
          <img src="/static/支付宝.png" style="width: 1rem;margin-right: 0.2rem;">
          <span>支付宝</span>
        </div>
        <div class="right">
          <img src="@/assets/right.png" class="right-btn">
        </div>
      </div>
    </div>

     <!-- 微信支付弹出层 -->
    <div class="wx-mask" v-show="wxPay" @click="wxPay = false">
      <div class="content-pay">
        <span>微信支付</span>
        <img src="/static/wechat.png" class="wx">
      </div>
    </div>

     <!-- 支付宝支付弹出层 -->
    <div class="ali-mask" v-show="aliPay" @click="aliPay = false">
      <div class="content-pay">
        <span>支付宝支付</span>
        <img src="/static/alipay.png" class="ali">
      </div>  
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      wxPay: false,
      aliPay: false
    }
  },
  components: {

  },
  methods: {
    setWxPay() {
      this.wxPay = !this.wxPay
    },
    setAliPay() {
      this.aliPay = !this.aliPay
    }
  }
}
</script>

<style scoped lang="scss">
.content-wrap {
  margin-top: 1rem;

  .approach {
    padding: 0.3rem 0.2rem;
    font-size: 16px;
    border-bottom: 1px solid #e1e1e1;
  }

  img {
    display: block;
  }

  .wx-pay,.zfb-pay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.2rem;
    border-bottom: 1px solid #e1e1e1;

    .left {
      font-size: 16px;
      display: flex;
      align-items: center;
    }
  }
}

.wx-mask,.ali-mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  position:fixed;
  top: 0;
  left: 0;
  z-index: 998;
  text-align: center;

  .content-pay {
    margin: 0 auto;
    margin-top:30vh;
    width: 5rem;
    // height: 3rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: block;
      height: 1rem;
      line-height: 1rem;
      font-size: 18px;
      font-weight: 500;
    }
    img {
      width: 5rem;
    }
  }
}
</style>
