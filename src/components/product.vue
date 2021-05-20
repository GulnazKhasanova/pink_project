<template>
  <div class="item_card">
    <div class="item_img">
      <img :src="product.productImg" alt="" class="img_blockitem" />
      <router-link :to="{ name:'proditem', params:{ id: product.id }}" class="layer">
        <a href="" @click.prevent="addItem(product)" class="add_to_cart1"> Add to Cart</a>
      </router-link>
    </div>
    <div class="title_blockitem">
      <p class="text_blockitem">{{ product.productName }}</p>
      <p class="price_blockitem">{{ product.productPrice }} $</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['product','proditem'],
  methods: {
    ...mapActions({
      addItem: 'cart/incCart',

    }),
  },
  computed: {



  }
}
</script>

<style>

.item_card {
  width: 263px;
  height: 364px;
}

.item_card:hover {
  width: 263px;
  height: 364px;
  background-color: #ffffff;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.15);
}

.item_img {
  display: inline-flex;
  width: 263px;
  height: 280px;
}

.img_blockitem {
  position: relative;
}

.layer {
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  width: 263px;
  height: 280px;
  z-index: 1;
  background-color: rgba(58, 56, 56, 0);
}



 .add_to_cart1 {
  align-items: center;
  justify-content: flex-end;
  display: none;
  padding-right: 20px;
  background-image: url("~@/assets/img/forma_1_copy_1287.svg");
  background-repeat: no-repeat;
  background-position: 10px;
  background-size: auto;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  color: #ffffff;
  width: 123px;
  height: 39px;
  border: 1px solid #ffffff;
  text-align: end;
  z-index: 500;
  text-decoration: none;
}
.layer:hover {
  background-color: rgba(58, 56, 56, 0.83);
}
.layer:hover .add_to_cart1 { display: inline-flex;}
.add_to_cart1:hover {
  color: #fff;
  opacity: 62%;
  background-color: #f16d7f;
}
.add_to_cart1:active{
  color: #fff;
  opacity: 62%;
  background-color: #fff;
}
.title_blockitem {
  display: block;
  width: 261px;
  height: 35px;
}

.text_blockitem {
  margin-left: 15px;
  overflow: hidden;
  margin-top: 19px;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
}

.price_blockitem {
  margin-left: 15px;
  margin-top: 17px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #f16d7f;
}

</style>
