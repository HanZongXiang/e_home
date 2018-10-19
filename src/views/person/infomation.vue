<template>
  <div class="info-wrap">
    <Header :title="this.$route.meta.title"></Header>
    <router-link to="/updateInfo" class="edit">{{this.$route.name == 'infomation' ? '编辑' : '保存'}}</router-link>
    <div class="list-wrap">
      <div class="list-item">
        <div class="item-title">头像</div>
        <div class="item.content">
          <img :src="infomations.header" class="avatar" :class="{editing:this.$route.name == 'updateInfo'}">
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">姓名</div>
        <div class="item.content">
          {{infomations.username}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">身份证</div>
        <div class="item.content">
          {{infomations.idCard}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">家庭住址</div>
        <div class="item.content">
          {{infomations.hometown}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">工作地址</div>
        <div class="item.content">
          {{infomations.address}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">民族</div>
        <div class="item.content">
          {{infomations.nation}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">微信号</div>
        <div class="item.content">
          {{infomations.wxNum}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">扣扣号</div>
        <div class="item.content">
          {{infomations.qqNum}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">性别</div>
        <div class="item.content">
          {{infomations.sex == 0 ? '女' : '男'}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">最高学历</div>
        <div class="item.content">
          {{infomations.education}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">职称</div>
        <div class="item.content">
          {{infomations.jobRank}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">薪资水平</div>
        <div class="item.content">
          {{infomations.salary}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">入党时间</div>
        <div class="item.content">
          {{infomations.joinPartyTime}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">党费最后缴纳时间</div>
        <div class="item.content">
          {{infomations.lastPayTime}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">当前身份</div>
        <div class="item.content">
          {{infomations.partyIdentity}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      infomations: [],
      loading: false
    }
  },
  components: {

  },
  methods: {
    getInfomations() {
      this.loading = true
      this.$axios.get('/user/userInfo.do').then(res => {
        if (res.code == 1) {
          console.log(res)
          this.infomations = res.data
          this.loading = false
        }
      }).catch(err => {
        this.$toast.error('数据请求失败')
        this.loading = false
      })
    }
  },
  created() {
    this.getInfomations()
  }
}
</script>

<style scoped lang="scss">
.edit {
  display:block;
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
  z-index: 33;
  font-size: 16px;
  color: #fff;
}

.list-wrap {
  margin-top: 1rem;

  .list-item {
    padding:0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border-bottom: 1px solid #e1e1e1;

    .avatar {
      display: block;
      width: 0.75rem;
      height: 0.55rem;
    }

    .editing {
      width: 0.9rem;
    }
  }
}
</style>
