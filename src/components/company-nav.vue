<template>
<div class="company">
      <p @click="show=!show" class="footer_h2">COMPANY</p>
  <transition name="company">
    <ul v-if="show">
      <li class="footer_list" v-for="item in items"><router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer_1">{{ item }}</router-link></li>
    </ul>
  </transition>
</div>
</template>

<script>
export default {
name: "company-nav",
  data: () => ({
    items:[
        'Shop',
        'About',
        'How It Works',
        'Contact'
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
.company-enter-active,
.company-leave-active {
  transition: opacity .3s ease;
}
.company-enter,
.company-leave-to {
  opacity: 0;
}
.company{
  display: none;
}
@media (max-width: 838px) {
  .company{
    width: 100%;
    display: block;
  }
}
</style>