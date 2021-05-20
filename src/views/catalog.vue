<template>
<div class="catalog">
  <h2 class="catalog_h2">CATALOG</h2>
  <div class="block_fetured_items">
    <products></products>
  </div>
    <banner3></banner3>
</div>
</template>

<script>
import Products from "@/components/products";
import Banner3 from "@/components/baner3";

export default {
  name: "catalog",
  components: { Products, Banner3},
  methods: {
    addProduct($event) {
      console.log($event);
      this.$emit("add-product", $event);
    },
  }
}
</script>

<style scoped>
.catalog{
  margin-top: 120px;
  width: 100%;
}
.block_fetured_items{
  margin: 50px auto;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 838px) {
  .catalog{
    margin-top: 280px;
  }
}
</style>