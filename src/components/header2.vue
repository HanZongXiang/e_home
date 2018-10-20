<template>
  <div class="header-wrap">
    <img src="/static/返回.png" class="return fll" @click="returnPage"></img>
    <h3 class="title">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  components: {
    
  },
  methods: {
    returnPage() {
      history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.header-wrap {
  text-align: center;

  .return {
    display: block;
    margin-top: 0.3rem;
    width: 0.36rem;
    text-align: left;
  }
}

</style>
