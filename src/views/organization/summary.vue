<template>
  <div class="wrapper">
    <Header title="心得总结"></Header>

    <div class="upload-wrap">
      <upload v-model="imgUrl"></upload>
    </div>

    <div class="btn">
      <mu-button color="error" full-width style="height: 0.8rem">提交审核</mu-button>
    </div>
  </div>
</template>

<script>
import upload from '@/components/upload'

export default {
  name:'',
  data() {
    return {
      imgUrl: ''
    }
  },
  components: {
    upload
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.upload-wrap {
  margin-top: 1rem;
}
.btn {
  margin-top: 9rem;
  padding: 1.5rem;
}
</style>
