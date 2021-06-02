<template>
  <div>
    <div class="profile-title">
      <h4>
        {{ 'ProfileTitle' | localize }} <b>{{ info.name }}</b>
      </h4>
    </div>
    <div class="row">
      <form class="col s12" @submit.prevent="submitHandler">
        <div class="row">
          <div class="input-field col s4">
            <input id="name" type="text" class="validate" v-model.trim="name" />
            <label for="name">{{ 'Name' | localize }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s4">
            <input
              id="adress"
              type="text"
              class="validate"
              v-model.trim="adress"
            />
            <label for="adress">{{ 'DeliveryAdress' | localize }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s4">
            <input
              id="phone"
              type="tel"
              class="validate"
              v-model.trim="phone"
            />
            <label for="phone">{{ 'PhoneNumber' | localize }}</label>
          </div>
        </div>
        <button class="waves-effect waves-light btn-large" type="submit">
          <i class="material-icons left">save</i>{{ 'UpdateInfo' | localize }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'profile',
  data() {
    return {
      name: '',
      adress: '',
      phone: '',
    }
  },
  computed: {
    ...mapGetters(['info']),
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      try {
        await this.updateInfo({
          name: this.name,
          adress: this.adress,
          phone: this.phone,
        })
        this.$message('Дані успішно змінено')
      } catch (e) {}
    },
  },
  mounted() {
    this.name = this.info.name
    this.adress = this.info.adress
    this.phone = this.info.phone

    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
}
</script>
