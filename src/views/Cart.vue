<template>
  <div>
    <div class="cart-shop" v-if="this.CART.length">
      <div class="cart-header">
        <div class="cart-title">
          <h4>Оформити замовлення</h4>
        </div>

        <!-- <div class="clean-cart">
                <a class="clean-cart-link" href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66675 4.99996V3.33329C6.66675 2.89127 6.84234 2.46734 7.1549 2.15478C7.46746 1.84222 7.89139 1.66663 8.33342 1.66663H11.6667C12.1088 1.66663 12.5327 1.84222 12.8453 2.15478C13.1578 2.46734 13.3334 2.89127 13.3334 3.33329V4.99996M15.8334 4.99996V16.6666C15.8334 17.1087 15.6578 17.5326 15.3453 17.8451C15.0327 18.1577 14.6088 18.3333 14.1667 18.3333H5.83341C5.39139 18.3333 4.96746 18.1577 4.6549 17.8451C4.34234 17.5326 4.16675 17.1087 4.16675 16.6666V4.99996H15.8334Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.33325 9.16663V14.1666" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6667 9.16663V14.1666" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <span>Очистити кошик</span></a>
            </div> -->
      </div>
      <div class="cart-main">
        <div class="cart-items">
          <CartItem
            v-for="(item, index) in CART"
            :key="item.id"
            :cart_item_data="item"
            @increment="increment(index)"
            @decrement="decrement(index)"
            @deleteFromCart="deleteFromCart(index)"
          />
        </div>
        <div class="cart-chekout" v-if="this.info.name">
          <form @submit.prevent="orderProduct">
            <div class="chekout">
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Самовивіз</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Доставка</span>
                </label>
              </p>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input
                  id="firstName"
                  type="text"
                  class="validate"
                  v-model.trim="name"
                />
                <label for="firstName">Ім'я</label>
              </div>
              <div class="input-field col s12">
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
              <div class="input-field col s12">
                <i class="material-icons prefix">phone</i>
                <input
                  id="icon_telephone"
                  type="tel"
                  class="validate"
                  v-model="phone"
                />
                <label for="icon_telephone">Телефон</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                  v-model="coment"
                ></textarea>
                <label for="textarea1">Коментар до замовлення</label>
              </div>
            </div>
            <div class="cart-sum">
              <span>
                Сумма замовлення: <b>{{ cartTotalCost }} ₴</b></span
              >
            </div>
            <div class="cart-btns">
              <button
                type="button"
                onclick="history.back(); return false;"
                class="cart-btn-back"
              >
                &#8592; Повернутися назад
              </button>
              <button type="submit" class="cart-btn-submit">
                Оформити замовлення
              </button>
            </div>
          </form>
        </div>
        <div v-else class="center">Увійдіть в аккаунт</div>
      </div>
    </div>

    <span v-else class="center">
      Кошик пустий
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from '../components/CartItem'
export default {
  name: 'cart',
  data: () => ({
    name: '',
    adress: '',
    phone: '',
    coment: '',
    // self_pickup: false,
    // delivery: true,
  }),
  components: {
    CartItem,
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'postOrder',
      'getOrders',
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    orderProduct() {
      const formData = {
        name: this.name,
        phone: this.phone,
        adress: this.adress,
        coment: this.coment,
      }
      this.postOrder(formData)
      this.$router.push('/')
      this.$message('Замовлення прийнято')

      this.getOrders()
    },
  },
  computed: {
    ...mapGetters(['CART', 'info']),
    cartTotalCost() {
      let result = []

      if (this.CART.length) {
        for (let item of this.CART) {
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
  mounted() {
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
    this.name = this.info.name
    this.adress = this.info.adress
    this.phone = this.info.phone
  },
}
</script>
