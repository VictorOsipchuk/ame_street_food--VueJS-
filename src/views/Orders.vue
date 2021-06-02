<template>
  <div>
    <div class="order_title">
      <h4>{{ 'OrderHistory' | localize }}</h4>
    </div>
    <Loader v-if="loading" />
    <div class="order_history">
      <OrderCart v-for="item in orders" :key="item.id" :order_data="item" />
    </div>
  </div>
</template>
<script>
import OrderCart from '../components/OrderCart'
import Loader from '../components/Loader'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: true,
    }
  },
  async mounted() {
    await this.getOrders()

    this.loading = false
  },
  computed: {
    ...mapGetters(['orders']),
  },
  methods: {
    ...mapActions(['getOrders']),
  },
  components: {
    OrderCart,
    Loader,
  },
}
</script>
