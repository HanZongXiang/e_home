<template>
  <div class="wrapper">
    <Header :title="this.$route.meta.title"></Header>
    <div class="card-wrapper">
      <div class="row1 clearfix">
        <div class="img-wrapper fll">
          <img :src="this.$route.query.avatar">
        </div>
        <div class="author-wrap fll">
          <div class="author">{{this.$route.query.author}}</div>
          <div class="time"><img src="@/assets/interactive/时间.png" style="width:0.25rem;margin-right: 0.1rem;">{{this.$route.query.time}}</div>
        </div>
      </div>
      <div class="content">
        {{this.$route.query.content}}
      </div>
    </div>
    <div style="margin-bottom:1rem">
      <div class="comment-detail" v-for="(item,index) in commentData" :key="index">
        <div class="row1 clearfix">
          <div class="img-wrapper fll">
            <img :src="item.header">
          </div>
          <div class="author-wrap fll">
            <div class="author">{{item.username}}</div>
            <div class="time"><img src="@/assets/interactive/时间.png" style="width:0.25rem;margin-right: 0.1rem;">{{item.timeFormat}}</div>
          </div>
        </div>
        <div class="content">
          {{item.comment}}
        </div>
      </div>
    </div>
    

    <div class="comment">
      <input type="text" placeholder="评论内容" v-model="content" @keyup.enter="addComment">
      <input type="submit" value="评论" @click="addComment">
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      commentData: [],
      content: ''
    }
  },
  components: {

  },
  methods: {
    getCommentDetail() {
      const forum_id = this.$route.query.id
      this.$axios.get('/forum/forumCommentList.do',{forum_id}).then(res => {
        this.commentData = res.rows
      })
    },
    addComment() {
      const obj = {
        forum_id: this.$route.query.id,
        comment: this.content 
      }
      this.$axios.post('forum/addComment.do',obj).then(res => {
        // console.log(res)
        if(res.code == 1) {
          this.$toast.success(res.msg)
          this.content = ''
          this.getCommentDetail()
        }
      })
    }
  },
  created() {
    this.getCommentDetail()
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background: #efeff4;
  height: 100vh;
  padding-top: 0.2rem;

  .card-wrapper {
    margin-top: 1rem;
    padding: 0.3rem;
    border: 1px solid #ddd;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
    background: #fff;

    .row1 {
      display: flex;
      align-items: center;

      .img-wrapper {

        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin-right: 0.2rem;
          vertical-align: bottom;
        }
      }
      
      .author-wrap {
        .author {
          color: #444;
          font-size: 18px;
        }

        .time{
          display: flex;
          align-items: center;
          margin-top: 0.0.6rem;
          color: #666;
          font-size: 12px;
        }
      }
    }

    .content {
      margin-top: 0.3rem;
      color: #666;
      font-size: 16px;
    }
  }
}

.comment-detail {
  padding: 0.3rem;
  border: 1px solid #ddd;
  background: #fff;

  .row1 {
    display: flex;
    align-items: center;

    .img-wrapper {

      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin-right: 0.2rem;
        vertical-align: bottom;
      }
    }
    
    .author-wrap {
      .author {
        color: #444;
        font-size: 18px;
      }

      .time{
        display: flex;
        align-items: center;
        margin-top: 0.0.6rem;
        color: #666;
        font-size: 12px;
      }
    }
  }
}

.comment {
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.95rem;
  padding: 0.15rem;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-between;

  input::-webkit-input-placeholder {
    color: #111;
    font-size: 14px;
  }
  input:nth-child(1) {
    border: 1px solid #f00;
    border-radius: 3px;
    outline: none;
    height: 100%;
    width: 6rem;
    padding-left: 0.2rem;
  }
  input:nth-child(2) {
    text-align: center;
    color: #fff;
    border: 1px solid #f00;
    border-radius: 3px;
    outline: none;
    width: 0.7rem;
    height: 100%;
    background: #c50206;
  }
}
</style>
