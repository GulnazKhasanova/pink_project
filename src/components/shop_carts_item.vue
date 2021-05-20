<template>
  <div class="cartItem">
    <p class="show_prodname"> {{ shopping.productName }} </p>
    <div class="mango_shirt_cart">
      <img :src="shopping.productImg" alt="" class="mango_shirt_cart_img" />
      <div class="mango_shirt_cart_text">
        <p class="mango_shirt_cart_p_head">{{ shopping.productName }}</p>
        <p class="mango_shirt_cart_color">
          Color: <span class="red_mango">Red</span>
        </p>
        <p class="mango_shirt_cart_size">Size: <span>Xll</span></p>
      </div>
    </div>
    <div class="mango_descrip1">

      <ul class="name_shopping_menu">
        <li>UnitePrice</li>
        <li>Quantity</li>
        <li>Subtotal</li>
        <li>ACTION</li>
      </ul>
    </div>

    <div class="mango_descrip">

      <div class="prise">${{ shopping.productPrice }}</div>
      <div class="prise">{{ shopping.quantity }}шт</div>
      <div class="prise">${{ shopping.quantity * shopping.productPrice }}</div>
      <div class="action">
        <button class="dellEll" @click.prevent="decItem(shopping)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      </div>
    </div>


  </div>
</template>

<script>

import { mapActions } from "vuex";
import mango from "@/components/mango_price";
import mangobig from "@/components/mango_price_big";
export default {


  props: ["shopping"],

  methods: {

      ...mapActions({
      addItem: "cart/incCart",
      decItem: "cart/decCart",
    }),
  },

}
</script>

<style  lang ="scss" scoped>
.name_shopping_menu,.show_prodname, .mango_descrip1 {
  display: none;
}
.cartItem {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
 }
.mango_descrip {
  display: flex;
  width: 100%;
  & > div {
    width: 25%;
  }
}
@media (max-width: 838px) {
  .mango_shirt_cart_p_head{
    display: none;
  }
  .mango_descrip{
    display: flex;
    flex-direction: column;
    width: 80%;
    & > div {
      width: 100%;
    }
  }
  .mango_descrip1{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-top: 0px;
    justify-content: flex-end;
    & > div {
      width: 30%;
    }
  }
  .mango_descrip{
    margin: 3%;
  }

  .name_shopping_menu {
    margin-left: auto;
    display: block;
    width:auto;
    padding:0;
    & > li {
      list-style: none;
    }
  }

}

.dellEll {
  width: 30px;
  height: 30px;
  color: black;
}
.prise{
  width: 20%;
}
.fa{
  font-size: 17px;
  vertical-align: text-top;
}
</style>
