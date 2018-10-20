<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="btn-wrap">
      <mu-button color="error">提交审核</mu-button>
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
  width: 100vw;
  height: 1rem;
  position: absolute;
  bottom: 1rem;
}
</style>
