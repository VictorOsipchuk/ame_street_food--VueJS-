<template>
  <div id="modal_login" class="modal" ref="modal_login">
    <div class="modal-content">
      <h4>Логін</h4>
      <div class="row">
        <form class="col s12" @submit.prevent="submitHandler">
          <div class="row">
            <div class="input-field col s12">
              <input id="email-login" type="email" v-model.trim="email" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password-login"
                type="password"
                v-model.trim="password"
              />
              <label for="password">Пароль</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn-large" type="submit">
            <i class="material-icons left">cloud</i>
            Увійти
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  async mounted() {
    M.Modal.init(this.$refs.modal_login)
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    ...mapActions(['login', 'fetchInfo']),
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.login(formData)
        await this.fetchInfo()
        this.$message(`<b>${this.info.name}</b>, Ви успішно увійшли в систему `)
        M.Modal.getInstance(this.$refs.modal_login).close()
      } catch (e) {}
    },
  },
  computed: {
    ...mapGetters(['info']),
  },
}
</script>
