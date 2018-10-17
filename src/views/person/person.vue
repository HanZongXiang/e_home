<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="avatar-wrap">
      <img src="@/assets/avatar.jpg" class="avatar">
      <p style="margin-bottom:0.35rem;">test</p>
    </div>
    <div class="menu-list">
      <router-link to="">
        <div class="info">
          <img src="@/assets/person.png">
          个人信息
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link to="">
        <div class="info">
          <img src="@/assets/lxjf.png">
          个人量化积分
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link to="">
        <div class="info">
          <img src="@/assets/xgmm.png">
          修改密码
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link to="">
        <div class="info">
          <img src="@/assets/icon3.png">
          党费缴纳
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <div class="btn-wrap" v-show="login">
        <button>退出登录</button>
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
      login:false
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
.wrapper {
  background: #c50206;
  height: 3rem;
  margin-top: 1rem;

  .avatar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#fff;

    .avatar{
      margin-top:0.8rem;
      margin-bottom: 0.2rem;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
    }
  }

  .menu-list {

    a {
      display:block;
      height: 1rem;
      display:flex;
      justify-content: space-between;
      align-items:center;
      line-height: 1rem;
      padding:0 0.2rem;
      font-size: 16px;
      border-bottom: 1px solid #e1e1e1;
    }

    .info {

      img {
        width:0.65rem;
        vertical-align: middle;
        margin-right: 0.1rem;
      }
    }

    .right-btn {
      width: 0.15rem;
      height: 0.22rem;
    }
    
  }
  
  .avatar {
    vertical-align: bottom;
  }

  .btn-wrap {
    padding: 0 0.15rem;
    margin-top:0.8rem;
  }

  button {
    width: 100%;
    height: 0.9rem;
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
</style>
