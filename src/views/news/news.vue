<template>
  <div class="news-wrap" ref="container">
    <Header :title="this.$route.meta.title"></Header>
    <mu-load-more @refresh="refresh" 
      :refreshing="refreshing" 
      :loading="loading" 
      :loaded-all="loadedAll" 
      @load="load"
    >
      <NewsList :listData="listData" :routeData="this.$route.name"></NewsList>
    </mu-load-more>
    <div class="footline" v-if="loadedAll">
      <div class="text">我是有底线的...</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header2'
import NewsList from '@/components/newsList'

export default {
  name:'',
  data() {
    return {
      listData: [],
      page:1,
      rows:10,
      type:0,
      loadingTransition:false,
      refreshing: false,
      loading: false,
      loadedAll: false
    }
  },
  components: {
    Header,
    NewsList
  },
  methods: {
    getListData() {
      let page = this.page;
      let rows = this.rows;
      // console.log(this.$route)
      this.loadingTransition = true
      this.$axios.get('/news/newsList.do',{page,rows,type:this.$route.meta.type}).then(res => {
        if (res.code == 1) {
          console.log(res)
          // console.log(this.$route.name)
          this.listData = res.rows
          this.loadingTransition = false
        } else {
          alert('请求有误')
        }
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
        this.$axios.get('/news/newsList.do',{page,rows:10,type:this.$route.meta.type}).then(res => {
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
        this.$axios.get('/news/newsList.do',{page:this.page,rows:this.rows,type:this.$route.meta.type}).then(res => {
          console.log(res)
          if (res.rows.length == 0) {
            this.loadedAll = true
          } else {
            let listData = [...this.listData,...res.rows]
            this.listData = listData
          }
        })
      }, 1000)
    }
  },
  created() {
    this.getListData()
  }
}
</script>

<style scoped lang="scss">
.footline {
  width: 7.2rem;
  text-align: center;
  font-size: 12px;
  color: #666;

  .text{
    background: #f1f1f1;
    padding:10px 40px;
  }

}
</style>
<style>
.mu-load-more {
  width: 7.2rem;
}
</style>

