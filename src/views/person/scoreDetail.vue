<template>
  <div class="score-detail">
    <Header :title="this.$route.meta.title"></Header>
    <div class="detail-container">
      <mu-load-more 
        :loading="loading" 
        :loaded-all="loadedAll" 
        @load="load"
      >
        <div class="score-item" v-for="(item,index) in listData" :key="index">
          <div class="row1">
            <p>{{item.typeName}}</p>
            <p style="color: #f00">+{{item.singleDesc}}</p>
          </div>
          <div class="row2">
            <span>{{item.timeFormat}}</span>
          </div>
        </div>
      </mu-load-more>
      <div class="footline" v-if="loadedAll">
        <div class="text">我是有底线的...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      page: 1,
      listData: [],
      loading: false,
      loadedAll: false
    }
  },
  components: {

  },
  methods: {
    getScoreDetail() {
      let page = this.page
      this.$axios.get('/integral/integralList.do',{page,rows: 10}).then(res => {
        if (res.code == 1) {
          this.listData = res.rows
        } else {
          this.$toast.error(res.msg)
        }
      })
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.page += 1;
        console.log(this.page)
        this.$axios.get('/integral/integralList.do',{page:this.page,rows:10}).then(res => {
          console.log(res)
          if (res.rows.length == 0) {
            this.loadedAll = true
          } else {
            let listData = [...this.listData,...res.rows]
            this.listData = listData
          }
        })
      }, 1000)
    }
  },
  created() {
    this.getScoreDetail()
  }
}
</script>

<style scoped lang="scss">
.detail-container {
  margin-top: 1rem;

  .score-item {
    padding: 0.3rem;
    border-bottom: 1px solid #e1e1e1;

    .row1 {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color:#333;
      margin-bottom: 0.1rem;

    }
  }
}

.footline {
  width: 7.2rem;
  text-align: center;
  font-size: 12px;
  color: #666;

  .text{
    background: #f1f1f1;
    padding:10px 40px;
  }

}
</style>
