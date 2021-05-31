<template>
  <div id="modal_reg" class="modal" ref="modal_reg">
    <div class="modal-content">
      <h4>Реєстрація</h4>
      <div class="row">
        <form class="col s12" @submit.prevent="submitHandler">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="firstName"
                type="text"
                class="validate"
                v-model.trim="name"
              />
              <label for="firstName">Ім'я</label>
            </div>
            <div class="input-field col s6">
              <input
                id="lastName"
                type="text"
                class="validate"
                v-model.trim="adress"
              />
              <label for="lastName">Адрес доставки</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="email"
                type="email"
                class="validate"
                v-model.trim="email"
              />
              <label for="email">Email</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                v-model.number="phone"
              />
              <label for="icon_telephone">Телефон</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                v-model.trim="password"
              />
              <label for="password">Пароль</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn-large" type="submit">
            <i class="material-icons left">cloud</i>Регістрація
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'registrations',
  data: () => ({
    email: '',
    password: '',
    name: '',
    adress: '',
    phone: '',
  }),
  mounted() {
    M.Modal.init(this.$refs.modal_reg)
    setTimeout(() => {
      // this.select = M.FormSelect.init(this.$refs.select)
      M.updateTextFields()
    }, 0)
  },

  methods: {
    ...mapActions(['register', 'fetchInfo']),
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
        adress: this.adress,
      }
      try {
        await this.register(formData)
        await this.fetchInfo()

        M.Modal.getInstance(this.$refs.modal_reg).close()
      } catch (e) {}
    },
  },
}
</script>
