<template>
  <div class="news-wrap">
    <Header :title="this.$route.meta.title"></Header>
    <NewsList :listData="listData" :routeData="this.$route.name"></NewsList>
  </div>
</template>

<script>
import Header from '@/components/header2'
import NewsList from '@/components/newsList'

export default {
  name:'',
  data() {
    return {
      listData: [],
      page:1,
      rows:10,
      type:0
    }
  },
  components: {
    Header,
    NewsList
  },
  methods: {
    getListData() {
      let page = this.page;
      let rows = this.rows;
      let type = this.type;
      this.$axios.get('/news/newsList.do',{page,rows,type}).then(res => {
        if (res.code == 1) {
          console.log(res)
          // console.log(this.$route.name)
          this.listData = res.rows
        } else {
          alert('请求有误')
        }
      })
    }
  },
  created() {
    this.getListData()
  }
}
</script>

<style scoped lang="scss">
// .news-wrap {
  
//   .icon {
//     display: block;
//     width: 0.36rem;
//     height: 52.5px;
//     text-align: left;
//     background:url('../../assets/news/return_btn.png') no-repeat center center;
//     background-size: (10px,10px);
//   }

//   .list-item {
//     display: block;
//     width: 7.2rem;
//     padding:10px;
//     padding-right: 20px;
//     text-decoration: none;
//     color:#666;
//     border-bottom: 1px solid #e1e1e1;

//     li {
//       display:flex;
//       padding-right: 17px;
//     }

//     .right-content {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       margin-left:10px;

//       .news-detail{
//         img {
//           display: inline;
//           margin-right:7px;
//         }
//       }
//     }
//   }

//   img {
//     width: 1.6rem;
//     display:block;
//   }

//   .news-title {
//     font-size: 16px;
//     color:#333;
//   }

//   .news-detail {
//     font-size: 10px;
//     color:#666;

//     img {
//       width: 15px;
//       opacity:.5;
//     }
//   }
// }

// .list-wrap {
//   margin-top:52.5px;
// }
// .header-wrap {
//   text-align: center;
// }
</style>
