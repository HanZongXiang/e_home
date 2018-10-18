<template>
  <div class="news-wrap">
    <Header :title="this.$route.meta.title"></Header>
    <NewsList :listData="listData" :routeData="this.$route.name"></NewsList>
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
      type:0
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
      this.$axios.get('/news/newsList.do',{page,rows,type:this.$route.meta.type}).then(res => {
        if (res.code == 1) {
          console.log(res)
          // console.log(this.$route.name)
          this.listData = res.rows
        } else {
          alert('请求有误')
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
</style>
