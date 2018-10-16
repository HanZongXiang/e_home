<template>
  <div class="layout-wrap">
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="bottom-tab">
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/tab'

export default {
  name:'',
  data() {
    return {
      
    }
  },
  components: {
    Tab
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.bottom-tab {
  width: 7.2rem;
  height: 52.5px;
}
</style>
