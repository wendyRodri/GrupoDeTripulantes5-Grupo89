<template>
  <BasicLayouts>
    <h2>Estamos en la categoría</h2>
    {{ products }}
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import BasicLayouts from "../layouts/BasicLayouts.vue";
import { getCategoriesApi, getProductsCategory } from '../api/product';

export default {
  name: 'Category',
  components: {
    BasicLayouts,
  },
  watch: {
    $route(to, from) {
      this.getProducts(to.params.category);
    },
  },
  
  setup() {
    let products = ref(null);
    const { params } = useRoute();
        
    onMounted(() => {
      getProducts(params.category);
    });

    const getProducts = async (category) => {
      const response = await getProductsCategory(category);
      products.value = response;
    };

    return {
      getProducts,
      products,
    };

  },
};
</script>

<style></style>
