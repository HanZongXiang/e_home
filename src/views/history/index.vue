<template>
  <div class="wrapper" 
    v-loading="loading" 
    data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" 
    data-mu-loading-color="secondary" 
    data-mu-loading-text="正在拼命加载中..."
  >
    <Header :title="this.$route.meta.title"></Header>
    <div class="detail-wrap content" v-html="historyData">

    </div>
  </div>
</template>

<script>
import getData from '@/utils/getData'
import cheerio from 'cheerio'

export default {
  name:'',
  data() {
    return {
      historyData: '',
      loading: false
    }
  },
  components: {
    
  },
  methods: {
    getPartyHistory() {
      this.loading = true
      var date = new Date()
      var month = date.getMonth() + 1
      var day = date.getDate()
      month = month < 10 ? '0' + month : '' + month
      day = day < 10 ? '0' + day : '' + day
      let url = getData(month,day)
      // console.log(url)
      this.$axios.get('/proxy/proxy.do',{url}).then(res => {
        // console.log(res)
        this.loading = false
        var $ = cheerio.load(res)
        this.historyData = $('div.p1_02').html()
        // console.log(this.historyData)
      }).catch(err => {
        this.loading = false
      })
    }
  },
  created() {
    this.getPartyHistory()
  }
}
</script>

<style lang="scss">
.content {
  h1 {
    margin-top: 0;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0.15rem;
  }
  h2 {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
  }
  p {
    line-height: 2;
    margin-bottom: 0.2rem;
  }
}
</style>
