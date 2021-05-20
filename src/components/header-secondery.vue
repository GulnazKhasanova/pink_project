<template>
  <div class="new_arrivals_background">
    <div class="new_arrivals">
      <p class="text_new_top">New Arrivals</p>
      <ul class="men_menu">
        <li class="men_menu_item"><a href="" class="men_menu_a">Home/</a></li>
        <li class="men_menu_item"><a href="" class="men_menu_a">People/</a></li>
        <li class="men_menu_item">
          <a href="" class="men_menu_a men_menu_a_activ">New Arrivals</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "header-secondery"
}
</script>

<style scoped>
.new_arrivals_background {
  margin: 0 auto;
  margin-top: 100px;
  min-height: 100px;
  max-width: 1600px;
  background-color: #f8f3f4;
}

.new_arrivals_background > .new_arrivals {
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100px;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f3f4;
}

.new_arrivals_background > .new_arrivals > .text_new_top {
  font-size: 24px;
  line-height: 20px;
  font-weight: 900;
  text-transform: uppercase;
  color: #f16d7f;
}

.new_arrivals_background > .new_arrivals > .men_menu {
  width: 220px;
  float: right;
}

.new_arrivals_background > .new_arrivals > .men_menu > .men_menu_item {
  float: left;
  display: inline-block;
}

.new_arrivals_background > .new_arrivals > .men_menu > .men_menu_item > .men_menu_a {
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: #636363;
}

.new_arrivals_background > .new_arrivals > .men_menu > .men_menu_item > .men_menu_a:hover {
  color: #f16d7f;
}

.new_arrivals_background > .new_arrivals > .men_menu > .men_menu_item > .men_menu_a_activ {
  color: #f16d7f;
  font-weight: 400;
}

</style>