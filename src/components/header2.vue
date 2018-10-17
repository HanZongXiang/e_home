<template>
  <div class="header-wrap">
    <i class="icon fll" @click="returnPage"></i>
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

  .icon {
    display: block;
    width: 0.36rem;
    height: 52.5px;
    text-align: left;
    background:url('../assets/news/return_btn.png') no-repeat center center;
    background-size: (10px,10px);
  }
}

</style>
