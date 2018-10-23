<template>
  <div class="wrapper">
    <Header title="参评党员"></Header>
    <div class="discuss-wrap">
      <mu-load-more 
      :loading="loading" 
      :loaded-all="loadedAll" 
      @load="load"
    >
        <div class="list-item" v-for="(item,index) in memberList">
          <div class="left">
            <img :src="item.header" class="avatar">
            <p>{{item.username}}</p>
          </div>
          <div>
            {{item.branchName}}
          </div>
        </div>
      </mu-load-more>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      page:1,
      memberList: [],
      loadedAll: false,
      loading: false
    }
  },
  components: {

  },
  methods: {
    getMembers() {
      const token = localStorage.getItem('token')
      this.$axios.get('/nationComment/userList.do',{select_branch: this.$route.query.id, user_id: token, page:1, rows: 10}).then(res => {
        if (res.code == 1) {
          this.memberList = res.rows
        } else {
          this.$toast.error('数据请求有误')
        }
      })
    },
    load() {
      const token = localStorage.getItem('token')
      this.loading = true
      setTimeout(() => {
        let page = this.page += 1
        console.log(this.page)
        this.$axios.get('/nationComment/userList.do',{select_branch: this.$route.query.id, user_id: token, page, rows: 10}).then(res => {
          if (res.rows.length == 0) {
            this.loadedAll = true
          } else {
            this.loading = false
            let listData = [...this.memberList,...res.rows]
            this.memberList = listData
          }
        })
      }, 1000);
    }
  },
  created() {
    this.getMembers()
  }
}
</script>

<style scoped lang="scss">
.discuss-wrap {
  margin-top: 1rem;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;
    border-bottom: 1px solid #e1e1e1;

    .left {
      display: flex;
      align-items: center;

      .avatar {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.25rem;
      }
    }
  }
}
</style>
