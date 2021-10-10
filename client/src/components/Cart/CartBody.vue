<template>
    <div class="cart-body" v-if="products">	
        <div class="product" v-for="product in products" :key="product.id">
            <img	
                class="ui image fluid"	
                :src="API_URL + product.image.url"	
                :alt="product.name"	
            />	
            <div class="info">	
                <p>{{ product.name }}</p>	
                <div class="price">	
                    <p>$ {{ product.price }}</p>

                    <div class="quantity">	
                        <button class="ui button primary" size="large">+</button>
                        <p>{{ product.quantity }}</p>	
                        <button class="ui button primary" size="large">-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>	
</template>

<script>
import { API_URL } from '../../utils/constants';

export default {
  name: "CartBody",
  props: {
    products: Array,
  },
  setup() {
      return { API_URL };
  },
};
</script>

<style>
</style>