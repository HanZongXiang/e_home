<template>
  <div class="detail">
    <Header :title="title"></Header>
    <Detail :detail="detail"></Detail>
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
      title:''
    }
  },
  components: {
    Header,
    Detail
  },
  methods: {
    getNewsDetails() {
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
            default:
              break;
          }
        }
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

