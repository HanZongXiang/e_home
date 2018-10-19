<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="banner-wrap">
      <img src="@/assets/jifen.png">
      <span class="score">{{totalScore}}</span>
    </div>
    <router-link class="score-detail" to="/scoreDetail">
      <div class="left">
        <img src="@/assets/lxjf.png">积分明细
      </div>
      <div class="right">
        <img src="@/assets/right.png">
      </div>
    </router-link>
    <div class="regulation-wrap">
      <div class="regulation-item">
        <div class="name" style="color: #444">积分规则</div>
        <div class="value">
          <img src="@/assets/question.png" style="width:0.4rem;height:0.4rem;">
        </div>
      </div>
      <div class="regulation-item">
        <div class="name">登录APP</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">完善个人信息</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">查看积分</div>
        <div class="value">1</div>
      </div>
      <div class="regulation-item">
        <div class="name">按时缴纳党费</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">查看通知</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">了解学院工作动态</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">上交思想汇报经审核通过</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">主动学习相关文件</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">认真撰写心得总结并上交，经审核通过</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">提交个人总结，并参与评议</div>
        <div class="value">2</div>
      </div>
      <div class="regulation-item">
        <div class="name">积极参与互动</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">学习党建知识</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">学习党史</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">创先争优事迹</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">学党章，学习近平总书记系列讲话</div>
        <div class="value">10</div>
      </div>
      <div class="regulation-item">
        <div class="name">用镜头记录两学一做过程中令人感动的人和事</div>
        <div class="value">3</div>
      </div>
      <div class="regulation-item">
        <div class="name">关注并积极参与特色活动</div>
        <div class="value">5</div>
      </div>
      <div class="regulation-item">
        <div class="name">制度化、常态化建设</div>
        <div class="value">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      totalScore: 0
    }
  },
  components: {

  },
  methods: {
    getScore() {
      this.$axios.get('user/userInfo.do').then(res => {
        this.totalScore = res.data.totalScore
      })
    }
  },
  created() {
    this.getScore()
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  .banner-wrap {
    margin-top: 1rem;
    position: relative;

    img {
      display: block;
      width: 7.2rem;
    }

    .score {
      position:absolute;
      top: 50%;
      left: 50%;
      color: rgba(255, 255, 255, .8);
      font-size: 16px;
      transform: translate(-50%,-50%);
    }
  }
}

.score-detail {
  display: block;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 0.2rem;
  border-bottom: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;

  .left {
    display:flex;
    align-items: center;
    color: #666;

    img {
      width: 0.6rem;
      margin-right: 0.2rem;
    }
  }

  .right {
    img {
      width: 0.15rem;
      height: 0.22rem;
    }
  }
}

.regulation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.7rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #e1e1e1;

  .name {
    font-size: 14px;
    color: rgb(153,153,153);
  }

  .value {
    display: flex;
    align-items: center;
    color: #f00;
  }
}
</style>
