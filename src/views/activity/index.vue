<template>
  <div>
    <Header :title="this.$route.meta.title"></Header>
    <NewsList :listData="activityData" :routeData="this.$route.name"></NewsList>
  </div>
</template>

<script>
import Header from '@/components/header2'
import NewsList from '@/components/newsList'

export default {
  name:'',
  data() {
    return {
      activityData: []
    }
  },
  components: {
    Header,
    NewsList
  },
  methods: {
    getActivityData() {
      this.$axios.get('/news/newsList.do',{page:1,rows:10,type:1}).then(res => {
        if (res.code == 1) {
          console.log(res)
          this.activityData = res.rows
        }
      })
    }
  },
  created() {
    this.getActivityData()
  }
}
</script>

<style scoped>
</style>
