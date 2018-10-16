<template>
  <div class="build-detail">
    <Header :title="this.$route.meta.title"></Header>
    <div class="detail-wrap">
      <h3>{{detail.title}}</h3>
      <div class="detail-content" v-html="content">

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
      detail:{},
      content:'',
      title:''
    }
  },
  components: {
    Header
  },
  methods: {
    getBuildDetails() {
      const newsId = this.$route.params.id
      console.log(newsId)
      this.$axios.get('/news/newsContent.do',{newsId}).then(res => {
        if (res.code == 1) {
          this.detail = res.data
          this.content = res.data.content
          console.log(res)
        }
      })
    },
    // getTitle() {
    //   const title = this.
    // }
  },
  created() {
    this.getBuildDetails()
  }
}
</script>

<style scoped lang="scss">
.build-wrap {
  .header-wrap {
    text-align: center;
  }

  .icon {
    display: block;
    width: 0.36rem;
    height: 52.5px;
    text-align: left;
    background:url('../../assets/news/return_btn.png') no-repeat center center;
    background-size: (10px,10px);
  }

}
</style>
