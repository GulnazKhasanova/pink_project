<template>
  <div class="baner3">
    <div class="ten">
      <div class="content_baner3">
        <div class="slider_ban3">
          <img
              src="@/assets/img/ellipse_3_2206.jpg"
              alt=""
              class="img_ban3"
          />
          <p class="text_ban3">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
            pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
            pretium”
          </p>
          <p class="sign_ban3">Bin Burhan</p>
          <p class="_ban3">Dhaka, Bd</p>
          <div class="ban3_nav">
            <div class="ban3_li"></div>
            <div class="ban3_li activ_li"></div>
            <div class="ban3_li"></div>
          </div>
        </div>
        <div class="polosa"></div>
        <div class="subscribe">
          <h2 class="sub_text">Subscribe</h2>
          <p class="sub_p">FOR OUR NEWLETTER AND PROMOTION</p>
          <input type="text" class="sub_input" value="Enter Your Email" />
          <a href="" class="buton_subscribe">Subscribe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baner3"
}
</script>

<style scoped>
.baner3 {
  position: relative;
  margin: 0 auto;
  /*max-width: 1600px;*/
  background-size: cover;
  background-position: center;
  min-height: 438px;
  background-image: url("~@/assets/img/rectangle_9_2194.jpg");
  background-color: rgba(242, 242, 242, 0.5);
}

/* line 623, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.ten {
 /* max-width: 1600px;*/
  min-height: 438px;
  background-color: rgba(242, 242, 242, 0.5);
}

/* line 630, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.content_baner3 {
  max-width: 1140px;
  min-height: 438px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

/* line 638, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.slider_ban3 {
  margin-top: 111px;
  width: 486px;
}

/* line 645, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.img_ban3 {
  margin-left: 28px;
  margin-right: 28px;
  float: left;
  border-radius: 50%;
  width: 83px;
  height: 83px;
}

/* line 654, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.text_ban3 {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.025em;
  color: #222224;
}

/* line 663, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.sign_ban3 {
  margin-top: 19px;
  margin-left: 140px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #f16d7f;
}

/* line 673, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
._ban3 {
  margin-left: 140px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  color: #222224;
}

/* line 681, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.ban3_nav {
  margin-left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 41px;
  display: inline-block;
  float: left;
  width: 153px;
  height: 4px;
}

/* line 691, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.ban3_li {
  float: left;
  margin-right: 13px;
  width: 38px;
  height: 4px;
  background-color: #d6d6d6;
}

/* line 699, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.activ_li {
  background-color: #f16d7f;
}

/* line 703, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.ban3_li:hover {
  background-color: #f16d7f;
}

/* line 707, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.polosa {
  width: 1px;
  height: 438px;
  background-color: #ffffff;
}

/* line 715, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.subscribe {
  display: block;
  width: 386px;
  margin-bottom: 40px;
}

/* line 723, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.sub_text {
  text-align: center;
  margin: 0 auto;
  width: 277px;
  margin-top: 148px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #222224;
}

/* line 735, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.sub_p {
  text-align: center;
  margin: 0 auto;
  width: 277px;
  font-size: 14px;
  line-height: 24px;
  text-transform: none;
}

/* line 745, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.sub_input {
  padding-left: 24px;
  opacity: 0.67;
  letter-spacing: 0.025em;
  color: #222224;
  box-sizing: border-box;
  border: none;
  position: relative;
  margin-top: 25px;
  width: 100%;
  height: 46px;
  background-color: #e1e1e1;
  border-radius: 23px;
}

/* line 755, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.sub_input[value] {
  padding-left: 24px;
  opacity: 0.67;
  font-size: 14px;
  line-height: 54px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #222224;
  box-sizing: border-box;
}

/* line 766, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.buton_subscribe {
  margin-top: 25px;
  margin-left: -104px;
  padding-left: 0;
  position: absolute;
  float: right;
  width: 104px;
  height: 46px;
  background-color: #f16d7f;
  border-radius: 0px 23px 23px 0px;
  font-size: 14px;
  line-height: 51px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #ffffff;
  box-sizing: border-box;
  text-decoration: none;
}

/* line 785, /assets/img/assets/img/assets/imgDesktop/newscsslesson4/scss/style.scss */
.buton_subscribe:hover {
  background-color: #ee5469;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

</style>