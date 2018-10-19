<template>
  <div class="score-detail">
    <Header :title="this.$route.meta.title"></Header>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    getScoreDetail() {
      this.$axios.get('/integral/integralList.do').then(res => {
        console.log(res)
      })
    }
  },
  created() {
    this.getScoreDetail()
  }
}
</script>

<style scoped>
</style>
