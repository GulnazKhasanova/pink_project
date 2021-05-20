<template>
  <div class="mango_price">
    <ul>
    <li class="mango_price_name"> {{ shopping.productPrice }}</li>
    <li class="mango_price_name">{{ shopping.quantity }}шт</li>
    <li class="mango_price_name">${{ shopping.quantity * shopping.productPrice }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ["shopping"],
  name: "mango_price"
}

</script>

<style scoped>
ul {
  margin: 0;
  padding:0;
  width: auto;
}

  .mango_price{
    display: flex;
    margin: 10px;
    flex-direction: column;
    width: 50%;
  }
  .mango_price_name{
    list-style-type: none;
    padding: 10px;
    width: auto;
  }
</style>