<template>
  <div class="row_item_card">
    <product
      v-for="item of products"
      :key="item.productId"
      :product="item"
      @add-product="addProduct($event)"
    ></product>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import product from "@/components/product";
export default {
  components: { product },
  methods: {
    addProduct($event) {
      this.$emit("add-product", $event);
    },
  },
  computed: {
    ...mapGetters({
      products: ["catalog/products"],
    }),
  },
};
</script>

<style>
.row_item_card {
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
