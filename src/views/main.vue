<template>
  <banner1></banner1>
    <main>
      <collection></collection>
      <div class="fetured_h2_title">
        <h2 class="block_fetured">Fetured Items</h2>
        <p class="subtitle_blockitem">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <div class="block_fetured_items" id="catalog">
        <products></products>
      </div>
      <div class="all_product">
        <router-link :to="{ name: 'people'}" class="button_prod">Browse All Product</router-link>
      </div>
      <banner2></banner2>
    </main>
  <banner3></banner3>
</template>

<script>
import Products from "@/components/products";
import Banner2 from "@/components/baner2";
import Banner3 from "@/components/baner3";
import Banner1 from "@/components/baner1";
import Collection from "@/components/collection-clearfix";
export default {
  components: { Products, Banner2, Banner3, Banner1, Collection },
  methods: {
    addProduct($event) {
      console.log($event);
      this.$emit("add-product", $event);
    },
  },
  computed: {},
};
</script>

<style>
.fetured_h2_title {
  margin: 0 auto;
}

.fetured_h2_title > .block_fetured {
  margin-top: 100px;
  margin-bottom: 4px;
  text-align: center;
  font-size: 30px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #222222;
}

.fetured_h2_title > .subtitle_blockitem {
  margin-bottom: 62px!important;
  text-align: center;
  font-size: 14px;
  line-height: 0px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #9f9f9f;
}

.all_product {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 79px;
  margin-bottom: 113px;
  height: 48px;
  max-width: 1140px;
}

.all_product .button_prod {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  height: 48px;
  background-color: #f16d7f;
  font-size: 16px;
  line-height: 54px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #ffffff;
  text-decoration: none;
}
.button_prod:hover {
  background-color: #ee5469;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.block_fetured_items {
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
}
</style>