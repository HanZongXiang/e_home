<template>
  <div class="wrapper" ref="container" 
       v-loading="loadingTransition" 
       data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" 
       data-mu-loading-color="secondary"  
       data-mu-loading-text="正在拼命加载中..."
  >
    <Header :title="this.$route.meta.title"></Header>
    <div class="outer">
      <mu-load-more @refresh="refresh" 
      :refreshing="refreshing" 
      :loading="loading" 
      :loaded-all="loadedAll" 
      @load="load"
      >
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
          <router-link class="row3" :to="{path:'/interactiveReply',query:{avatar:item.header,
            time:item.currentTime,author:item.username,content:item.content,id: item.forumId
          }}">
            <img src="@/assets/interactive/消息.png" class="message">
            <span>回复</span> 
          </router-link>
        </div>
      </mu-load-more>
    </div>
    <div class="btn-wrap" @click="handlePublish">
      <img src="@/assets/发布btn.png" class="publish">
    </div>

    <div class="mask" v-show="showModal" @click="handleHidden" ref="mask">
      <div class="bottom-content" ref="content">
        <form>
          <textarea name="textarea" class="textarea" v-model="formData.content"></textarea>
          <div class="btn-wrapper">
            <input type="button" value="发布" class="publish" @click="publish">
            <input type="button" value="取消" class="cancel" @click="cancel">
          </div>
        </form>
      </div>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name:'',
  data() {
    return {
      listData: [],
      loadingTransition: false,
      refreshing: false,
      loading: false,
      loadedAll: false,
      page:1,
      showModal: false,
      formData: {
        content: '',
        type: 1
      }
    }
  },
  components: {
  },
  methods: {
    getListData() {
      this.loadingTransition = true
      this.$axios.get('forum/forumList.do').then(res => {
        if (res.code == 1) {
          this.listData = res.rows
        }
        this.loadingTransition = false
      }).catch(err => {
        this.loadingTransition = false
        this.$toast.info('数据获取失败')
      })
    },
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        let page = this.page = 1
        this.$axios.get('forum/forumList.do',{page,rows:10,cates: 0}).then(res => {
          if (res.code == 1) {
            this.listData = res.rows
          } else {
            this.$toast.error('数据请求有误')
          }
        })
      }, 1000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.page += 1;
        console.log(this.page)
        this.$axios.get('forum/forumList.do',{page:this.page,rows:10,cates: 0}).then(res => {
          console.log(res)
          if (res.rows.length == 0) {
            this.loadedAll = true
          } else {
            let listData = [...this.listData,...res.rows]
            this.listData = listData
          }
        })
      }, 1000)
    },
    handlePublish() {
      this.showModal = !this.showModal
      document.documentElement.style.overflow = 'hidden'
      console.log(this.$refs)
      this.$refs.mask.addEventListener("touchmove",function(e){
                e.preventDefault();
      });
      this.$refs.content.addEventListener("click",function(e){
                e.stopPropagation()
      });
    },
    handleHidden() {
      this.showModal = !this.showModal
      document.documentElement.style.overflow = 'auto'
    },
    publish() {
      // const publishData = qs.stringify(this.formData)
      this.$axios.post('forum/saveForum.do',this.formData).then(res => {
        console.log(res)
        if (res.code == 1) {
          this.showModal = !this.showModal
          document.documentElement.style.overflow = 'auto'
          this.$toast.success(res.msg)
          this.getListData()
        } else {
          this.showModal = !this.showModal
          document.documentElement.style.overflow = 'auto'
          this.$toast.error(res.msg)
        }
      })
    },
    cancel() {
      this.showModal = !this.showModal
      document.documentElement.style.overflow = 'auto'
    }
  },
  created() {
    this.getListData()
    document.documentElement.style.overflow = 'auto'
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
        padding: 2px 0.125rem;
        box-sizing: border-box;
        width: 1.3rem;
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
.btn-wrap {
  position: fixed;
  bottom: 1rem;
  right: 0.2rem;
}

.publish {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
}

.mask {
  width: 100vw;
  height: 100vh;
  position:fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0,0,0,.5);

  .bottom-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3rem;
    padding: 0.2rem;
    background: #f1f1f1;

    .textarea {
      width: 100%;
      height: 1.8rem;
      outline: none;
      border: none;
      border-radius: 3px;
      color: #444;
      font-size: 14px;
      margin-bottom: 0.2rem;
    }

    .btn-wrapper {
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 0.7rem;
        height: 0.6rem;
        border-radius: 3px;
        border: none;
        outline: none;
        font-size: 12px;
      }

      .publish {
        color: #fff;
        background: #ef473a;
        
      }

      .cancel {
        color: #333;
        background: #fff;
      }
    }
  }
}
</style>
