<template>
  <BasicLayouts>
    <main class="Contenedor_Nosotros">
      <h2 class="Title">Nosotros</h2>
      <div class="Nosotros">
        <div class="Nosotros_Cont">
          <h2 class="Nosotros_h2">¿Quienes somos?</h2>
          <p class="Parrafo"></p>
        </div>
        <img class="image" src="imagen assets" />
      </div>
    </main>
  </BasicLayouts>
</template>
<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";
export default {
  component: { BasicLayouts },
  name: "Nosotros",
};
</script>

<style>
.parrafo {
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
  font-family: "Ubuntu", sans-serif;
}
</style>
