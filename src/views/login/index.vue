<template>
  <div class="outer-wrapper">
    <div class="header">
      <i class="icon fll" @click="returnPage"></i>
      <h3 class="title">登录</h3>
    </div>
    <div class="login-wrap">
      <div class="banner-wrap">
        <img src="@/assets/logo.png">
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="身份证号">
        <input type="password" placeholder="密码">
        <button type="submit">登录</button>
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
    returnPage() {
      history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.outer-wrapper {
  width: 100vw;
  height: 100vh;
  background: #c50206;

  .header {
    text-align: center;

    .icon {
      display: block;
      width: 0.36rem;
      height: 52.5px;
      text-align: left;
      background:url('../../assets/news/return_btn.png') no-repeat center center;
      background-size: (10px,10px);
      margin-left:0.1rem;
    }
  }

  .login-wrap {
    margin-top: 0.6rem;

    .banner-wrap {
      text-align: center;
      margin-bottom: 0.65rem;

      img {
        vertical-align: middle;
        width: 3.6rem;
        height: 1rem;
      }
    }

    .input-wrap {
      padding: 0 40px;

      input::-webkit-input-placeholder {
        color: #fff;
        padding-left:5px;
      }
      
      input {
        width: 100%;
        height: 0.8rem;
        outline: none;
        border:1px solid #ff0;
        border-radius: 6px;
        background: #c50206;
        color: #fff;
        padding-left: 5px;
        font-size: 14px;
        box-sizing: border-box;
        margin-bottom: 0.4rem;
      }

      
      

      button {
        width: 100%;
        height: 0.8rem;
        background: #e3574f;
        color: #fff;
        border:none;
        border-radius: 6px;
        outline: none;
      }

      button:active {
        background: rgba(227,87,79,.6)
      }
    }
  }
}
</style>
