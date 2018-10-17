<template>
  <div>
    <Header :title="this.$route.meta.title"></Header>
    <NewsList :listData="systemData" :routeData="this.$route.name"></NewsList>
  </div>
</template>

<script>
import Header from '@/components/header2'
import NewsList from '@/components/newsList'

export default {
  name:'',
  data() {
    return {
      systemData: []
    }
  },
  components: {
    Header,
    NewsList
  },
  methods: {
    getSystemData() {
      this.$axios.get('/news/newsList.do',{page:1,rows:10,type:4}).then(res => {
        if (res.code == 1) {
          console.log(res)
          this.systemData = res.rows
        }
      })
    }
  },
  created() {
    this.getSystemData()
  }
}
</script>

<style scoped>
</style>
