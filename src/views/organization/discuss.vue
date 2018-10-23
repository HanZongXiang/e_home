<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="btn-wrap">
      <mu-button color="error" @click="$router.push('/personalSummary')">个人总结</mu-button>
      <mu-button color="error" @click="$router.push('/discuss')">民主评议</mu-button>
    </div>
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
    
  }
}
</script>

<style scoped>
.btn-wrap {
  width: 7.2rem;
  height: 3rem;
  margin-top: 5rem;
}
button {
  display: block;
  width: 4rem;
  height: 1rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
</style>
