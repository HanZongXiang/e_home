<template>
  <div class="detail">
    <Header :title="title"></Header>
    <Detail :detail="detail" v-loading="loading" data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" data-mu-loading-color="secondary"  data-mu-loading-text="正在拼命加载中..."></Detail>
  </div>
</template>

<script>
import Header from '@/components/header2'
import Detail from '@/components/details'

export default {
  name:'',
  data() {
    return {
      detail:{},
      content:'',
      title:'',
      loading: false
    }
  },
  components: {
    Header,
    Detail
  },
  methods: {
    getNewsDetails() {
      this.loading = true
      const newsId = this.$route.params.id
      console.log(newsId)
      this.$axios.get('/news/newsContent.do',{newsId}).then(res => {
        if (res.code == 1) {
          this.detail = res.data
          this.content = res.data.content
          console.log(res)
          switch(res.data.type) {
            case 0: 
              this.title = '信工新闻眼'
              break;
            case 1: 
              this.title = '特色活动'
              break;
            case 2:
              this.title = '通知早知道'
              break;
            case 3: 
              this.title = '党建一点通'
              break;
            case 4: 
              this.title = '制度建设'
              break;
            case 5: 
              this.title = '党员亮身份'
              break;  
            case 6:
              this.title = '随时随地学'
              break;
            case 7:
              this.title = '随时随地拍'
              break;
            case 8:
              this.title = '政治学习'
              break;
            default:
              break;
          }
          this.loading = false
        }
      }).catch(err => {
        this.loading = false
        this.$toast.info('数据获取失败')
      })
    },
    returnPage() {
      history.go(-1)
    }
  },
  created() {
    this.getNewsDetails()
  },
  
}
</script>

<style scoped lang="scss">
.detail {

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
}
</style>

