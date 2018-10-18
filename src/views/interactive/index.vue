<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="outer">
      <div class="content-wrap" v-for="(item,index) in listData" :key="index">
        <div class="row1">
          <img :src="item.header" class="avatar">
          <div class="center">
            <span>{{item.username}}</span>
            <div class="info">
              <img src="@/assets/interactive/时间.png">
              <span style="margin-right: 0.1rem">{{item.currentTime}}</span>
              <img src="@/assets/interactive/声音.png">
              <span>公开</span>
            </div>
          </div>
          <span class="interactive">党员互动</span>
        </div>
        <div class="row2">
          <p>{{item.content}}</p>
        </div>
        <router-link class="row3" to="">
          <img src="@/assets/interactive/消息.png" class="message">
          <span>回复</span> 
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
      listData: []
    }
  },
  components: {
    Header
  },
  methods: {
    getListData() {
      this.$axios.get('forum/forumList.do').then(res => {
        if (res.code == 1) {
          this.listData = res.rows
        }
      })
    }
  },
  created() {
    this.getListData()
  }
}
</script>

<style scoped lang="scss">
.outer {
  margin-top: 1rem;
  background: #eee;
}
.content-wrap {
  width: 7.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  box-sizing: border-box;
  padding:20px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  img {
    display: block;
  }

  .row1 {
    display: flex;

    .avatar {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      margin: auto 0;
      margin-right: 5px;
    }

    .center {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #333;
      margin-right: 0.7rem;

      .info {
        display: flex;
        width: 3.7rem;
        font-size: 12px;
        color: #444;
        align-items: center;

        img {
          width: 0.25rem;
          height: 0.25rem;
          margin-right: 0.1rem;
        }
      }
      
    }

    .interactive {
        float: right;
        font-size: 12px;
        padding: 2px 8px;
        box-sizing: border-box;
        // width: 1.3rem;
        height: 0.5rem;
        line-height: 0.4rem;
        border: 1px solid #f00;
        color: #f00;
        border-radius: 15%/50%;
      }
  }

  .row2 {
    margin: 10px 0;
    color: #444;
  }

  .row3 {
    display: block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #444;

    .message {
      width: 0.32rem;
      height: 0.33rem;
      display: inline-block;
      margin-right: 0.1rem;
    }
  }
}
</style>
