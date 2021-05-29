<template>
  <div class="order_item">
    <div class="order_num">Замовлення №{{ order_data.id }}</div>
    <div class="order_user">
      <div class="order_name">{{ order_data.order_info.name }}</div>
      <div class="order_info">
        <div class="order_phone">{{ order_data.order_info.phone }}</div>
        <div class="order_adress">{{ order_data.order_info.adress }}</div>
      </div>
    </div>
    <div class="order_items">
      <div
        class="order_product"
        v-for="prod in order_data.order_product"
        :key="prod.id"
      >
        <div class="oder_product_title">
          {{ prod.name }}
        </div>
        <div class="order_product_price">{{ prod.price }} ₴</div>
        <div class="order_product_qty">x{{ prod.quantity }}</div>
        <div class="order_product_sum">{{ prod.price * prod.quantity }} ₴</div>
      </div>
    </div>
    <div class="order_allsum">Сумма замовлення: {{ cartTotalCost }} ₴</div>
    <div class="order_date">
      <div class="order_date_h">{{ order_data.order_info.Date }}</div>
      <!-- <div class="order_date_d">24.25.2021</div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    order_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    cartTotalCost() {
      let result = []

      if (this.order_data.order_product.length) {
        for (let item of this.order_data.order_product) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function(sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    },
  },
}
</script>
