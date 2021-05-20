<template>
  <div class="contentpage">

    <main>

      <div class="menu_shopping">
        <ul class="menu_shopping_ul">
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Product Details</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">unitePrice</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Quantity</p>
          </li>
          <!--   <li class="menu_shopping_li">
            <p class="menu_shopping_p">shipping</p>
          </li> -->
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Subtotal</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">ACTION</p>
          </li>
        </ul>
      </div>

      <shop-cart></shop-cart>

      <div class="shopping_cart_contin">

        <div class="shopping_button">
          <a href="" class="button_shopping">CLEAR SHOPPING CART</a>
          <a href="" class="button_shopping">cLEAR SHOPPING CART</a>
        </div>

        <div class="adress_coupon_total">
          <div class="ad_co_to">
            <div class="ad_co_to_column">
              <p class="shipping_adress">Shipping Adress</p>
              <select name="Bangladesh" id="" class="bangladesh">
                <option value="Bangladesh">Bangladesh</option>
                <option value="Bangladesh">Moscow</option>
                <option value="Bangladesh">Kazan</option>
              </select>
              <select name="State" id="" class="bangladesh">
                <option value="State">State</option>
              </select>
              <select name="Postcode / Zip" id="" class="bangladesh">
                <option value="Postcode / Zip">Postcode / Zip</option>
              </select>
              <a href="" class="button_get">get a quote</a>
            </div>
            <div class="ad_co_to_column">
              <p class="shipping_adress">coupon discount</p>
              <p class="coupon_enter">Enter your coupon code if you have one</p>
              <select name="State" id="" class="bangladesh">
                <option value="State">State</option>
              </select>
              <a href="" class="button_get get_1">Apply coupon</a>
            </div>
            <div class="ad_co_to_column">
              <p class="shipping_adress"></p>
              <div class="grand">
                <p class="sub_total">Sub total {{ cartTotal }}</p>
                <p class="sub_grand">
                  GRAND TOTAL <span class="g_total">{{ cartTotal }}</span>
                </p>
                <div class="line_grand"></div>
                <router-link class="proceed" :to="{ name: 'checkout' }">
                  proceed to checkout
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <baner3></baner3>
  </div>
</template>

<script>
import shopCart from "@/components/shop_carts";
import Baner3 from "@/components/baner3";
import {mapGetters} from "vuex";

export default {
  components: { Baner3, shopCart },
  computed: {
    ...mapGetters({
      cartTotal: ["cart/cartTotal"],
    }),
}
};
</script>

<style lang = "scss" scoped>

@media (max-width: 576px) {
  .bangladesh {
    width: 100%!important;
  }
  .bangladesh option{
    width: 100%!important;
  }
}
.new_arrivals_background {
  margin-top: 100px;
}
.menu_shopping {
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  & > ul.menu_shopping_ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    & > li.menu_shopping_li {
      width: 20%;
    }
  }
}
.ad_co_to{
  display: flex;
  max-width: 1140px;
  height: auto;
}
.ad_co_to_column{
padding: 10px;
  width: 35%;
}
.shipping_adress {
  margin-bottom: 45px;
  height: 55px;
  box-sizing: border-box;
}
.shopping_cart_contin {
  width: 100%;
  justify-content: space-between;
}

.shopping_cart_contin > .shopping_button {
  width: 100%;
  padding-top: 44px;
  display: flex;
  justify-content: space-between;

}

.shopping_cart_contin > .shopping_button > .button_shopping {
  width: 235px;
  height: 50px;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
  text-decoration: none;
}

.shopping_cart_contin > .adress_coupon_total {
  width: 100%;
}

.shopping_cart_contin > .adress_coupon_total .shipping_adress {
  margin-top: 63px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}

.shopping_cart_contin > .adress_coupon_total .bangladesh {
  width: 360px;
  padding: 16px 18px 16px 18px;
  color: #b1b1b1;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 20px;
  margin-right: 32px;
  border: 1px solid #eaeaea;
}

.coupon_enter {
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: #000000;
  margin-top: 28px;
  margin-bottom: 24px;
}

.button_get {
  width: 100px;
  height: 35px;
  margin-bottom: 79px;
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
}

.get_1 {
  width: 118px;
}

.grand {
  margin-bottom: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 214px;
  background-color: #f5f3f3;
}

.grand > .sub_total {
  text-align: end;
  width: 100%;
  padding: 40px 40px 0 40px;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #e2e2e2;
}

.grand > .sub_grand {
  text-align: end;
  width: 100%;
  padding: 0px 40px 22px 40px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}

.grand > .line_grand {
  margin-bottom: 17px;
  display: flex;
  width: 275px;
  height: 1px;
  background-color: #e2e2e2;
}

.grand > .proceed {
  width: 273px;
  height: 50px;
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #f16d7f;
}

.g_total {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #f16d7f;
}
</style>
