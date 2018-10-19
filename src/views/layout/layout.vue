<template>
  <div class="layout-wrap">
    <div>
      <router-view></router-view>
    </div>
    <Tab></Tab>
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
