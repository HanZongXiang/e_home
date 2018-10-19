<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="content">
      <img src="@/assets/reviewing.png">
      <p>正在审核中</p>
      <mu-button color="secondary" style="width:4.5rem" @click="$router.push('/organizations')">关闭</mu-button>
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
.content{
  margin-top: 2.5rem;
  text-align: center;
}
img {
  width: 1.6rem;
  height: 1.6rem;
}
p{
  color: #666;
  margin-top: 0.3rem;
  margin-bottom: 2rem;
}
</style>
