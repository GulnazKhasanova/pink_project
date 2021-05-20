<template>
  <header>
    <div class="header_1">
      <router-link :to="{ name: 'main'}" class="logo">
        <img src="@/assets/img/group_2_18.png" alt="" class="log" />
        <p class="name_site">BRAN<span class="symbol_d">D</span></p>
      </router-link>

      <div class="search">
        <my-search
          :userSearch="userSearch"
          @search="searchProduct(userSearch)"
        ></my-search>
      </div>
      <div class="nav">
        <ul class="h_shop">
          <li class="h_shop_style">
            <router-link :to="{ name: 'main' }" class="h_link">Home</router-link>
          </li>
          <li class="h_shop_style"><router-link :to="{ name: 'people' }" class="h_link">People</router-link>
          </li>
        </ul>
      </div>
      <router-link :to="{ name: 'cart' }" class="toCart">
        {{ allQuantity }}
        <img src="@/assets/img/forma_1_1113.svg" alt="" />
      </router-link>
    </div>

  </header>
</template>

<script>
import { mapGetters } from "vuex";
import MySearch from "@/components/mySearch";

export default {
  components:  {
    MySearch,
  },
  data: () => ({
    showCart: false,
    userSearch: "",

  }),
  props: ["cart-items", "my-search"],
  methods: {
    searchProduct(userSearch) {
      this.$emit("search", userSearch);
    },
    createEvent(cartItem) {
      this.$emit("additem", cartItem);
    },
    cartShow() {
      this.showCart = !this.showCart;
    },
  },
  computed: {
    ...mapGetters({
      allQuantity: ["cart/allQuantity"],
    })
  }
}

</script>

<style lang="scss" scoped>
header {
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  min-height: 100px;
  
  min-height: 100px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  box-sizing: border-box;
 }
header > .header_1 {
  padding: 0 20px;
  align-items: center;
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100px;
  width: 100%;
  box-sizing: border-box;
}
.log_f {
  float: left;
  margin-right: 13px;
}
.logo {
  display: flex;
  width: auto;
  height: 51px;
  margin-right: 13px;
}
.name_site {
  display: flex;
  float: right;
  width: 95px;
  font-size: 27px;
  line-height: 32px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #222222;
  margin-left: 10px;
  margin-top: 12px;
}

.symbol_d {
  color: #f16d7f;
  font-weight: bold;
}

.search {
  display: flex;
  justify-content: flex-start;
  margin: 20px;
  width: 100%;
}
.shop_account {
  margin-left: auto;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
  width: 130px;
  height: 38px;
  background-color: #f16d7f;
  font-family: Lato;
  font-size: 15px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #ffffff !important;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  min-height: 50px;
  background-color: #ffffff;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
}

.nav > .h_shop {
  padding-top: 12px;
  box-sizing: border-box;
  display: flex;
}

.nav > .h_shop > .h_shop_style {
  list-style-type: none;
  float: left;
}

.nav > .h_shop > .h_shop_style > .h_link {
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  text-decoration: none;
  padding: 15px 22px;
}

.nav > .h_shop > .h_shop_style > .h_link:hover {
  color: #949292;
  border-bottom: 3px solid #f16d7f;
}

.nav > .h_shop > .h_shop_style > .h_link_activ {
  color: #949292;
}

.toCart {
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 5px;
  color: black;
  &:hover {
    background-color: pink;
  }
}
@media (max-width: 838px) {
  .logo{margin-top:15px!important;}

}
</style>
