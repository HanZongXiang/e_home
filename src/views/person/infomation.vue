<template>
  <div class="info-wrap">
    <Header :title="this.$route.meta.title"></Header>
    <div @click="handleEdit" class="edit" v-if="this.$route.name == 'infomation'">编辑</div>
    <div @click="handleSave" class="edit" v-else>保存</div>
    <div class="list-wrap">
      <div class="list-item">
        <div class="item-title">头像</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          <img :src="infomations.header" class="avatar">
        </div>
        <div class="upload" v-else>
          <label class="upload-container">
            <img :src="infomations.header" class="avatar editing" id="pic">
            <input type="file" style="display:none" name="file" @change="upload">
            <!-- <img src="" class="avatar editing" hidden="hidden"> -->
          </label>
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">姓名</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.username}}
        </div>
        <input type="text" v-model="infomations.username" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">身份证</div>
        <div class="item.content">
          {{infomations.idCard}}
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">家庭住址</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.hometown}}
        </div>
        <input type="text" v-model="infomations.hometown" v-else>
      </div>
      <div class="list-item">
        <div class="item-title" style="overflow:hidden">工作地址</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.address}}
        </div>
        <input type="text" v-model="infomations.address" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">民族</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.nation}}
        </div>
        <input type="text" v-model="infomations.nation" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">微信号</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.wxNum}}
        </div>
        <input type="text" v-model="infomations.wxNum" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">扣扣号</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.qqNum}}
        </div>
        <input type="text" v-model="infomations.qqNum" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">性别</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.sex == 0 ? '女' : '男'}}
        </div>
        <div v-else>
          <mu-radio v-model="infomations.sex" value="1" label="男"></mu-radio>
          <mu-radio v-model="infomations.sex" value="0" label="女"></mu-radio>
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">最高学历</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.education}}
        </div>
        <input type="text" v-model="infomations.education" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">职称</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.jobRank}}
        </div>
        <input type="text" v-model="infomations.jobRank" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">薪资水平</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.salary}}
        </div>
        <input type="text" v-model="infomations.salary" v-else>
      </div>
      <div class="list-item">
        <div class="item-title">入党时间</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.joinPartyTime}}
        </div>
        <div v-else>
          <input type="date" v-model="infomations.joinPartyTime">
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">党费最后缴纳时间</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.lastPayTime}}
        </div>
        <div v-else>
          <input type="date" v-model="infomations.lastPayTime">
        </div>
      </div>
      <div class="list-item">
        <div class="item-title">当前身份</div>
        <div class="item.content" v-if="this.$route.name == 'infomation'">
          {{infomations.partyIdentity}}
        </div>
        <div v-else>
          <mu-select v-model="infomations.partyStatus">
            <mu-option v-for="option,index in options" :key="option.id" :label="option.identity" :value="option.id">
            </mu-option>
          </mu-select>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'',
  data() {
    return {
      infomations: {},
      editing: false,
      options: [
        {
          identity:'党员',
          id: 2
        },
        {
          identity:'预备党员',
          id: 1
        },
        {
          identity:'积极分子',
          id:0
        }
        
      ]
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
        }
      }).catch(err => {
        this.$toast.error('数据请求失败')
      })
    },
    handleEdit() {
      this.$router.push('/updateInfo')
    },
    upload (event) {
      let file = event.target.files[0]
      let reader = new FileReader()
      var preview = document.querySelector('#pic')
      reader.onloadend = () => {
        preview.src = reader.result
        let imgsrc = reader.result.split(',')[1]

        this.$axios.post('/image/uploadBase64.do',{myFile: imgsrc}).then(res => {
          this.infomations.header = res.url
        })
      }
      reader.readAsDataURL(file)
    },
    handleSave() {
      const res = delete this.infomations.idCard
      this.$axios.post('/user/modifyInfo.do',this.infomations).then(res => {
        if (res.code == 1) {
          this.$toast.success(res.msg)
          let obj = {
            avatar: this.infomations.header,
            username: this.infomations.username
          }
          this.$store.commit('CHANGE_userInfo',obj)
          this.$router.push('/infomation')
          this.getInfomations()
        } else {
          this.$toast.error(res.msg)
        }
      })
    },
  },
  created() {
    this.getInfomations()
  }
}
</script>

<style scoped lang="scss">

.edit {
  display:block;
  position: fixed;
  top: 0.3rem;
  right: 0.2rem;
  z-index: 33;
  font-size: 16px;
  color: #fff;
}

.list-wrap {
  margin-top: 1rem;
  background: #fff;

  .list-item {
    padding:0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border-bottom: 1px solid #e1e1e1;

    input {
      border: none;
      outline: none;
      text-align: right;
    }

    .avatar {
      display: block;
      width: 0.75rem;
      height: 0.55rem;
      // border-radius: 50%;
    }

    .editing {
      width: 0.9rem;
    }
  }
  /deep/ {

    .mu-input {
      margin-bottom: 0;
    }
    .mu-text-field-input {
      text-align: right;
    }
  }
}

</style>
