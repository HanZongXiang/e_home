<template>
  <div class="index-wrap">
    <Header></Header>
    <div class="content-wrap">
      <div class="swiper-wrap">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <router-link :to="{name:'newsDetail',params:{id:item.url}}">
              <img :src="item.imgUrl">
              <span>{{item.title}}</span>
            </router-link>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <div class="menu-list">
        <div class="row">
          <router-link class="list-item" to="/news">
            <img src="../assets/icon_01.png">
            <div>
              信工新闻眼
            </div>
          </router-link>
          <router-link  class="list-item" to="/organizations">
            <img src="../assets/icon_03.png">
            <div>
              掌上组织生活
            </div>
          </router-link>
          <router-link class="list-item" to="/">
            <img src="../assets/icon_05.png">
            <div>
              党员云互动
            </div>
          </router-link>
        </div>
        <div class="row">
          <router-link  class="list-item" to="/build">
            <img src="../assets/icon_04.png">
            <div>
              党建一点通
            </div>
          </router-link>
          <router-link class="list-item" to="/showIdentity">
            <img src="../assets/icon_06.png">
            <div>
              党员亮身份
            </div>
          </router-link>
          <router-link class="list-item" to="/">
            <img src="../assets/icon_02.png">
            <div>
              党史上的今天
            </div>
          </router-link>
        </div>
      </div>
      <div class="banner-wrap">
        <img src="../assets/banner001.png">
      </div>
      <div class="table-wrap">
        <div class="col1"></div>
        <div class="col2">
          <div class="row1">
            <router-link to="">

            </router-link>
            <router-link to="">
              
            </router-link>
          </div>
          <div class="row2">
            <router-link to="">
              
            </router-link>
            <router-link to="">
              
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/header'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'',
  data() {
    return {
      swiperOption:{
        //显示分页
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        //切换模式  横屏或者竖屏
        // direction : 'vertical',
        //设置自动播放速度
        autoplay: {
            disableOnInteraction: false,
            delay:4000
        },
        //开启无限循环
        loop:false,
        //设置点击箭头
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        //设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView:1,
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel:false ,
        //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        // freeMode:true
      },
      swiperData: []
    }
  },
  components: {
    Header,
    swiper,
    swiperSlide
  },
  methods: {
    getSwiper() {
      this.$axios.get('/carousel/carouselList.do').then(res => {
        if (res.code == 1) {
          this.swiperData = res.rows
        }
      })
    }
  },
  created() {
    this.getSwiper()
  }
  
}
</script>

<style scoped lang="scss">
.swiper-wrap {
  margin-top:52.5px;
  width: 7.2rem;
  position: relative;

  img {
    width: 7.2rem;
    display: block;
  }

  .swiper-pagination {
    position:absolute;
    bottom:0.15rem;
    left:3.6rem;
    transform: translateX(-50%)
  }

  /deep/ {
    .swiper-pagination-clickable .swiper-pagination-bullet {
    margin-right: 5px;
    opacity:.6;
    }

  }

  span {
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    width: 7.2rem;
    height: 28px;
    padding-left:5px;
    line-height: 28px;
    font-size: 12px;
    color:#fff;
    background:rgba(0,0,0,0.5);
  }
}

.menu-list {
  background: url('../assets/bt_bg.png') no-repeat center center;
  background-size: (100%,100%);

  .row {
    display: flex;
    text-align: center;
  }

  .row:nth-child(1){
    margin-bottom:20px;
  }
  .row:nth-child(2){
    padding-bottom:10px;
  }
  .list-item {
    padding-top:10px;

    text-decoration: none;
    font-size: 12px;
    color:#666;
    flex:1;

    img{
      width: 1rem;
      margin-bottom:5px;
    }
  }
}

.banner-wrap {
  width: 7.2rem;

  img {
    width: 7.2rem;
    vertical-align: middle;
  }
}

.table-wrap {
  width: 7.2rem;
  height: 164px;
  background: url('../assets/tese.png') no-repeat center center;
  background-size: 100%;
  display: flex;

  .col1 {
    flex:1
  }

  .col2 {
    flex:2;
    display:flex;
    flex-direction: column;

    .row1 {
      display: flex;

      a {
        display:block;
        // flex:1;
        width: 2.4rem;
        height: 82px;
      }
    }
    .row2 {
      display: flex;

      a {
        display:block;
        // flex:1;
        width: 2.4rem;
        height: 82px;
      }
    }
  }
}
</style>
