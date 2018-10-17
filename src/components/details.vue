<template>
  <div class="detail-wrap">
    <h3>{{currentDetail.title}}</h3>
    <div class="detail-content" v-html="currentDetail.content">
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    detail: {
      type: Object
    }
  },
  data() {
    return {
      currentDetail: {}
    }
  },
  methods: {

  },
  watch: {
    detail (val) {
      this.currentDetail = val
    }
  }
}
</script>

<style scoped>
</style>
