<template>
  <div class="">
    <Header :title="this.$route.meta.title"></Header>
  </div>
</template>

<script>
import Header from '@/components/header2'

export default {
  name:'',
  data() {
    return {

    }
  },
  components: {
    Header
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
