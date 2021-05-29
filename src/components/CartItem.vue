<template>    
    <div class="cart-item">
        <div class="cart-inner">
            <div class="cart-item-img">
                <img 
                class="cart-product-img "
                :src=" require('../assets/img/product/' + cart_item_data.image)" alt="">                              
            </div>
            <div class="cart-item-title">
                <h6>{{cart_item_data.name}}</h6>
                <span class="cart-discription">{{cart_item_data.discription}}</span>
            </div>
        </div>
        <div class="cart-length">
            <button 
            class="btn-length"
            @click="decrementItem"
            
            >-</button>
            {{ cart_item_data.quantity }}
            <button 
            class="btn-length"
            @click="incrementItem"
            >+</button>
        </div>
        <div class="cart-price">{{cart_item_data.price * cart_item_data.quantity}} ₴</div>
        <div class="cart-item-del"
            @click="deleteFromCart">&times;</div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "cartitem",
    data() {
        return {
            
        }
    },
    methods: {        
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        }         
    },
    props: {
        cart_item_data: {
            type: Object,
            default() {                
                return {}
            }
    }
        
    },
    
    
}
</script>