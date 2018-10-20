<template>
  <div class="update-pass">
    <Header :title="this.$route.meta.title"></Header>
    <div class="input-wrap">
      <mu-text-field v-model="formData.password" label="旧密码:" full-width></mu-text-field>
      <!-- <br> -->
      <mu-text-field v-model="formData.newPassword" label="新密码:" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'" full-width></mu-text-field>
      <mu-text-field v-model="formData.rewritePassword" label="确认密码:" :action-icon="visibility1 ? 'visibility_off' : 'visibility'" :action-click="() => (visibility1 = !visibility1)" :type="visibility1 ? 'text' : 'password'" full-width></mu-text-field>
      <mu-button full-width color="error">确定</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      formData: {
        password: '',
        newPassword: '',
        rewritePassword: ''
      },
      visibility: false,
      visibility1: false,
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.input-wrap {
  margin-top: 1rem;
  padding: 0.8rem 0.8rem;
  font-size: 26px;
}
/deep/ {
  .mu-input-label {
    font-size: 20px;
  }
}
</style>


