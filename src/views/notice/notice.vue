<template>
  <div class="">
    <Header :title="this.$route.meta.title"></Header>
    <div style="margin:50px">
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>
    
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
