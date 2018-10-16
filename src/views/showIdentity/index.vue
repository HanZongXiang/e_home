<template>
  <div class="wrapper">
    <Headers :title="this.$route.meta.title"></Headers>
    <NewsList :listData="listData" :routeData="this.$route.name"></NewsList>
  </div>
</template>

<script>
import Headers from '@/components/header2'
import Timer from '@/components/timer'
import NewsList from '@/components/newsList'

export default {
  name:'',
  data() {
    return {
      listData: []
    }
  },
  components: {
    Headers,
    Timer,
    NewsList
  },
  methods: {
    getListData() {
      this.$axios.get('/news/newsList.do',{page:1,rows:10,type:5}).then(res => {
        if (res.code == 1) {
          // console.log(this.$route.name)
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
