<template>
  <div v-loading="loading" 
       data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" 
       data-mu-loading-color="secondary"  
       data-mu-loading-text="正在拼命加载中..."
  >
    <Header :title="this.$route.meta.title"></Header>
    <div class="wrapper">
      <router-link :to="{name:'photoDetail',params:{id:item.newsId}}" class="photo-item" v-for="(item,index) in photoData" :key="index">
        <img :src="item.pic">
        <div class="photo-title">{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header2'

export default {
  name:'',
  data() {
    return {
      photoData: [],
      loading: false
    }
  },
  components: {
    Header
  },
  methods: {
    getPhotoData() {
      this.loading = true
      this.$axios.get('/news/newsList.do',{page:1,rows:10,type:7}).then(res => {
        if (res.code == 1) {
          console.log(res)
          this.loading = false
          this.photoData = res.rows
        }
      }).catch(err => {
        this.loading = false
      })
    }
  },
  created() {
    this.getPhotoData()
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin-top:1rem;
  padding:20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .photo-item {
    display: block;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    text-align: center;

    img {
      width: 3rem;
      height: 2.3rem;
    }

    .photo-title {
      width: 3rem;
      font-size: 13px;
    }
  }
}
</style>
