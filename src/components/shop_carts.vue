<template>
  <div class="mango_shirt">
    <shopping v-for="item of cartItems" :key="item.productId" :shopping="item">
    </shopping>
  </div>
</template>

<script>
import Shopping from "@/components/shop_carts_item";
import { mapGetters } from "vuex";
export default {
  props: ["shop_cart"],
  components: { Shopping },
  methods: {},
  computed: {
    ...mapGetters({
      cartItems: ["cart/cartProducts"],
    }),
  },
};
</script>

<style>
.mango_shirt {
  display: flex;
  flex-direction: column;
}
</style>