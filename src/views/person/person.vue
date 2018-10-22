<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="avatar-wrap">
      <img :src="userInfo.avatar" class="avatar" v-show="userInfo.username">
      <img src="@/assets/index/bt_bg.png" class="avatar" v-show="!userInfo.username">
      <p style="margin-bottom:0.35rem;" v-show="userInfo.username">{{userInfo.username}}</p>
      <p style="margin-bottom:0.35rem;" @click="$router.push('/login')" v-show="!userInfo.username">你还没有登录，请先登录</p>
    </div>
    <div class="menu-list">
      <router-link class="item" :to=" userInfo.username ? '/infomation' : '/login' " style="z-index:999">
        <div class="info">
          <img src="@/assets/person.png">
          个人信息
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link class="item" :to=" userInfo.username ? '/score' : '/login' ">
        <div class="info" >
          <img src="@/assets/lxjf.png">
          个人量化积分
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link class="item" :to=" userInfo.username ? '/updatePass' : '/login' ">
        <div class="info">
          <img src="@/assets/xgmm.png">
          修改密码
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <router-link class="item" :to=" userInfo.username ? '/fee' : '/login' ">
        <div class="info">
          <img src="@/assets/icon3.png">
          党费缴纳
        </div>
        <img src="@/assets/right.png" class="right-btn">
      </router-link>
      <div class="btn-wrap" v-show="userInfo.username">
        <mu-button @click="handleLogout">退出登录</mu-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header2'
import {mapState} from 'vuex'

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
    handleLogout() {
        let obj = {
            username: '',
            avatar: '',
            idCardNumber: '',
            level: ''
          }
        if (this.$store.state.userInfo.username) {
          this.$store.commit('CHANGE_userInfo',obj)
          localStorage.removeItem('token')
          this.$toast.info('退出登录成功')
        } else {
          this.$store.commit('CHANGE_userInfo',obj)
          this.$toast.info('退出登录成功')
        }
    },
    handleClick($event){
      console.log($event)
      if(this.$store.state.userInfo.username){
          const path = $event.currentTarget.dataset.link  //获取事件对象中的路由
          this.$router.push(path)
      } else {
          this.$router.push('/login')
      }
    },
    refreshInfo() {
      this.$axios.get('/user/userInfo.do').then(res => {
        let obj = {
          username: res.data.username,
          avatar: res.data.header
        }
        this.$store.commit('CHANGE_userInfo',obj)
      })
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    this.refreshInfo()
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

    .item {
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
