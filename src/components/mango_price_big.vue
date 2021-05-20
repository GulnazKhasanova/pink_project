<template>
    <div>
      <div class="prise">${{ shopping.productPrice }}</div>
      <div class="prise">{{ shopping.quantity }}шт</div>
      <div class="prise">${{ shopping.quantity * shopping.productPrice }}</div>
    </div>
</template>

<script>
export default {
  props: ["shopping"],
  name: "mango_price"
}

</script>

<style scoped>
    .prise{
      display: flex;
      float: left;
    }
</style>