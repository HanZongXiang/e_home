<template>
  <div class="wrapper">
    <Header title="民主评议"></Header>
    <div class="content">
      <h4>评议须知</h4>
      <p>
        在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：
      </p>
      <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
      <p>2、参加“两学一做”学习教育情况；</p>
      <p>3、参加党的组织生活、按要求交纳党费；</p>
      <p>4、学习情况、业务能力提高情况；</p>
      <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
      <p>6、联系群众、关心群众、服务群众情况；</p>
      <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
    </div>
    <div class="bottom-select">
      <select name class="brachSelect" v-model="branch">
        <option value="0">请选择</option>
        <option :value="item.id" v-for="(item,index) in branchData" :key="index">{{item.branch}}</option>
      </select>
      <input type="submit" value="下一步" @click="nextstep">
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      branchData: [],
      branch: 0
    }
  },
  components: {

  },
  methods: {
    getBranch() {
      this.$axios.get('/branch/findAll.do').then(res => {
        this.branchData = res.rows
      })
    },
    nextstep() {
      if (this.branch != 0) {
        this.$router.push({path:'/discussMembers',query: {id: this.branch}})
      } else {
        this.$toast.info('请选择相应的支部')
      }
    }
  },
  created() {
    this.getBranch()
  }
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 1rem;
  padding: 0.3rem 0.2rem;

  h4 {
    text-align: center;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 0.4rem;
  }

  p {
    color: #666;
  }

  p:nth-child(2){
    margin-bottom: 0.2rem;
  }

  p:not(:nth-child(2)){
    line-height: 2;
  }
}
.bottom-select {
  margin-top: 1.6rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.4rem;

  .brachSelect {
    border: 1px solid transparent;
    width: 4rem;
    height: 100%;
    outline: none;
    background: #c50206;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    padding-left: 0.3rem;

    option {
      background: #fff;
      color: #000;
    }
  }

  input {
    width: 2rem;
    height: 100%;
    border: none;
    outline: none;
    background: #c50206;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    font-size: 12px;
  }
}
</style>
