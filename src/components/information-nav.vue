<template>
<div class="information">
  <p @click="show=!show" class="footer_h2">INFORMATION</p>
  <transition name="information">
    <ul v-if="show">
      <li class="footer_list" v-for="item in items"><router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer_1">{{ item }}</router-link></li>
    </ul>
  </transition>
</div>
</template>

<script>
export default {
name: "information-nav",
  data: () => ({
    items:[
      'Tearms & Condition',
      'Privacy Policy',
      'How to Buy',
      'How to Sell',
      'Promotion'
    ],
    show: false
  })
}
</script>

<style scoped>
.footer_list {
  height: 44px;
}
.footer_h2 {

  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #f16d7f;
}
.information-enter-active,
.information-leave-active {
  transition: opacity .3s ease;
}
.information-enter,
.information-leave-to {
  opacity: 0;
}
.information{
  display: none;
}
@media (max-width: 838px) {
  .information{
    width: 100%;
    display: block;
  }
}
</style>