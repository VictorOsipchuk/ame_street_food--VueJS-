<template>
  <div class="category_title">
    <h1 class="center">Others</h1>

    <Loader v-if="loading" />

    <div class="product-items" v-else>
      <Item
        v-for="product in sortedByCategory"
        :key="product.id"
        :product_data="product"
        @addtoCart="CLICK_TO_CART"
      />
    </div>
  </div>
</template>

<script>
import Item from '../Item'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'others',
  data: () => ({
    loading: true,
  }),

  methods: {
    ...mapActions(['ADD_TO_CART']),
    CLICK_TO_CART(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.loading = false
  },
  computed: {
    ...mapGetters(['products']),
    sortedByCategory() {
      const items = this.products.filter(
        prod => prod.category === this.$options.name
      )
      return items
    },
  },
  components: {
    Item,
  },
}
</script>
