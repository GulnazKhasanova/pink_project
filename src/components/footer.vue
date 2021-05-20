<template>
  <footer>
    <div class="footer_shop">
      <div class="footer_1">
        <img src="@/assets/img/group_2_18.png" alt="" class="log_f" />
        <p class="otstup name_site">BRAN<span class="symbol_d">D</span></p>
        <p class="footer_1_text">
          Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate multidisciplinary materials before
          go forward benefits. Intrinsicly syndicate an expanded array of
          processes and cross-unit partnerships.
        </p>
        <p class="footer_1_text">
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.
        </p>
      </div>
      <div class="footer_hieght">
        <ul>
          <li><company></company></li>
          <li> <information></information></li>
          <li><category></category></li>
        </ul>
      </div>

      <div class="footer_2">
        <h2 class="footer_h2">COMPANY</h2>
        <ul class="footer_ul">
<!--          <li class="footer_list">-->
<!--            <a href="" class="link_style link_footer_1">Home</a>-->
<!--          </li>-->
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">Shop</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">About</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">How It Works</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">Contact </router-link>
          </li>
        </ul>
      </div>

      <div class="footer_3">
        <h2 class="footer_h2">INFORMATION</h2>
        <ul class="footer_ul">
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer_1">Tearms & Condition</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">Privacy Policy</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">How to Buy</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">How to Sell</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'pagedevelopment' }" class="link_style link_footer">Promotion</router-link>
          </li>
        </ul>
      </div>
           <div class="footer_4">
        <h2 class="footer_h2">SHOP CATEGORY</h2>
        <ul class="footer_ul">
          <li class="footer_list">
            <router-link :to="{ name: 'main' }" class="link_style link_footer_1">Home</router-link>
          </li>
          <li class="footer_list">
            <router-link :to="{ name: 'people' }" class="link_style link_footer">People</router-link>
          </li>

        </ul>
      </div>
    </div>
    <div class="copyr">
      <p class="copyr_text">© 2017 Brand All Rights Reserved.</p>
      <div class="soc">
        <div class="img_soc"><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></div>
        <div class="img_soc_activ">
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div class="img_soc"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
        <div class="img_soc"><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></div>
        <div class="img_soc"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></div>
      </div>
    </div>
  </footer>
</template>

<script>
import Company from "@/components/company-nav";
import Information from "@/components/information-nav";
import Category from "@/components/category-nav";
export default {
components: { Company, Information, Category }
};
</script>

<style>

footer {
  min-height: 537px;
  max-width: 100%;
  position: relative;
}
.footer_hieght{
  display: none;
}
.footer_hieght ul{
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: auto;
}
.footer_hieght ul li{
  display: flex;
  width: auto;
  margin: 0 25px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

/* line 796, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_shop {
  margin: 0 auto;
  max-width: 1140px;
  min-height: 458px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

/* line 805, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_1 {
  padding-top: 123px;
  width: 427px;
  height: 458px;
  box-sizing: border-box;
}

/* line 810, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_1_text {
  text-align: justify;
  padding-top: 27px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #898989;
}

/* line 820, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_2 {
  width: 103px;
}

/* line 825, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_3 {
  width: 150px;
}

/* line 830, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_4 {
  width: 160px;
}

/* line 835, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
/* line 839, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_h2 {
  margin-top: 123px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #f16d7f;
}

/* line 848, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_ul {
  list-style-type: none;
  margin-top: 20px;
}

/* line 853, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.footer_list {
  display: block;
  height: 44px;
}
.footer_hieght ul li ul{
  display: block;
}
.link_style {
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #898989;
}
.img_soc a .fa{
  color: #898989;
}
.img_soc:hover a .fa{
  color: #fff;
}
.img_soc_activ a .fa{
  color: #898989;
}
.img_soc_activ:hover a .fa{
  color: #fff;
}

/* line 865, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.link_footer_1 {
  line-height: 42px;
}

/* line 870, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.link_footer_1:hover {
  color: #222222;
}

/* line 874, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.link_footer {
  line-height: 43px;
}

/* line 878, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.link_footer:hover {
  color: #212529;
}

/* line 882, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.copyr {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  /*max-width: 1600px;*/
  min-height: 79px;
  align-items: center;
  background-color: #e6e6e6;
}

/* line 895, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.copyr_text {
  font-size: 16px;
  line-height: 42px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #7a7a7a;
}

/* line 903, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.soc {
  width: 192px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* line 910, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.img_soc {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
}

/* line 919, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.img_soc_activ {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #f16d7f;
}

.img_soc:hover {
  background-color: #f16d7f;
}

</style>