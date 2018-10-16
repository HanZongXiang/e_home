<template>
  <div class="list-wrap">
    <router-link :to="{name:`${routeData}Detail`, params:{id:item.newsId}}" class="list-item" v-for="(item,index) in listData" :key="index">
      <li class="clearfix">
        <div class="left-img fll">
          <img :src="item.pic">
        </div>
        <div class="right-content">
          <div class="news-title">{{item.title}}</div>
          <div class="news-detail clearfix">
            <p class="time fll">
              <Timer :time="item.updateTime"></Timer>
            </p>
            <span class="read-nums flr">
              <img src="../assets/news/12-eye.png">
              {{item.count}}
            </span>
          </div>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
import Timer from '@/components/timer'

export default {
  name:'',
  props: {
    listData: {
      type:Array,
      required:true
    },
    routeData: String
  },
  data() {
    return {
      currentList:[]
    }
  },
  components: {
    Timer
  },
  watch: {
    listData (val) {
      this.currentList = val.map(item => item)
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.list-wrap {
  margin-top: 52.5px;

  .list-item {
    display: block;
    width: 7.2rem;
    padding:10px;
    padding-right: 20px;
    text-decoration: none;
    color:#666;
    border-bottom: 1px solid #e1e1e1;

    li {
      display:flex;
      padding-right: 17px;
    }

    .right-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 5.2rem;
      margin-left:10px;

      .news-detail{
        img {
          display: inline;
          margin-right:7px;
        }
      }
    }
  }

  img {
    width: 1.6rem;
    display:block;
  }

  .news-title {
    font-size: 16px;
    color:#333;
  }

  .news-detail {
    font-size: 10px;
    color:#666;

    img {
      width: 15px;
      opacity:.5;
    }
  }
}
</style>
