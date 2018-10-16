<template>
  <span>
    {{str}}
  </span>
</template>

<script>
export default {
  name:'timer',
  props: {
    time: {
      type: [String,Number]
    }
  },
  data() {
    return {
      str:''
    }
  },
  components: {

  },
  methods: {
    getTimeStr() {
      let time = new Date(this.time)
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hours = time.getHours()
      const minutes = time.getMinutes()
      const seconds = time.getSeconds()
      return this.str = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
  },
  watch: {
    time() {
      this.getTimeStr()
    }
  },
  mounted() {
    this.getTimeStr()
  }
}
</script>

<style scoped>
</style>
