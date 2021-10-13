<template>
  <BasicLayouts>
    <body>
      <h1>Últimos productos</h1>

      <!--button-->
      <button class="ui primary button">
        Save
      </button>
      <button class="ui button">
        Discard
      </button>

      <div class="ui grid">
        <div
          class="sixten wide mobile eight wide"
          v-for="product in products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div>
    </body>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayouts from "../layouts/BasicLayouts.vue";
import { getProducts } from "../api/product";
import Product from "../components/Product";

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Product,
  },

  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response;
      console.log(response);
    });
    return {
      products,
    };
  },
};
</script>
<style>
.body {
  background-image: url();
}
</style>
