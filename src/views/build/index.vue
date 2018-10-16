<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <NewsList :listData="listData" :routeData="this.$route.name"></NewsList>
    
  </div>
</template>

<script>
import Header from '@/components/header2'
import NewsList from '@/components/newsList'
import Timer from '@/components/timer'

export default {
  name:'',
  data() {
    return {
      listData:[]
    }
  },
  components: {
    Header,
    Timer,
    NewsList
  },
  methods: {
    getListData() {
      this.$axios.get('/news/newsList.do',{page:1,rows:10,type:3}).then(res => {
        if (res.code == 1) {
          console.log(res)
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
@import "../../styles/list.scss"
</style>
