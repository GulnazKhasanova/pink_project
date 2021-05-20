<template>
  <shop-header></shop-header>
  <router-view />
  <!--      <router-view v-slot="{ Component }">-->
  <!--          <transition enter-active-class="page-enter"-->
  <!--                      leave-active-class="page-leave"-->
  <!--                      mode="out-in">-->
  <!--              <component :is="Component" />-->
  <!--          </transition>-->
  <!--      </router-view>-->

  <shop-footer></shop-footer>
</template>
<script>
/* eslint-disable */
import ShopHeader from "@/components/header";
import ShopFooter from "@/components/footer";
export default {
  components: {
    ShopHeader,
    ShopFooter,
  },
  mounted() {
    this.$store.dispatch("catalog/getProducts");
    this.$store.dispatch("cart/getCartProducts");
  },
};
</script>
<style lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
p {
  margin-bottom: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
