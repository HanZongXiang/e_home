<template>
  <label class="upload-wrapper">
    <i class="icon" v-if="!imgUrl"></i>
    <img :src="imgUrl" v-else>
    <input type="file" name="file" style="display:none" @change="upload">
  </label>
</template>

<script>
import axios from 'axios'
export default {
  name:'',
  props: {
    source: {
      type: String,
      // required: true
    }
  },
  data() {
    return {
      token: '',
      imgUrl: this.source
    }
  },
  components: {
    
  },
  methods: {
    getToken() {
      this.$axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        this.token = res.data
      })
    },
    upload(event) {
      let file = event.target.files[0]
      let formData = new FormData()
      formData.append('file',file,file.name)
      formData.append('token',this.token)

      axios.post('https://upload-z1.qiniup.com',formData,{
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then(res => {
        console.log(res.data.url)
        this.imgUrl = res.data.url
        this.$emit('success',res.data.url)
        this.$emit('input',res.data.url)
        this.$emit('change',res.data.url)
      })
    }
  },
  watch: {
    source(val) {
      this.imgUrl = val
    }
  },
  created() {
    this.getToken()
  }
}
</script>

<style scoped lang="scss">
.upload-wrapper{
  position: relative;
  display:block;
  width: 2rem;
  height: 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 6px;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
  }

  .icon{
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    top:50%;
    left:50%;
    background: url('/static/加.png') no-repeat center center;
    background-size: 0.7rem,0.7rem;
    transform: translate(-50%,-50%);
  }
}
</style>
