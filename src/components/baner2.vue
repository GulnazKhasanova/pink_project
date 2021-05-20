<template>
  <div class="baner2">
    <div class="baner2_bl_1">
      <div class="ban2_t">
        <h2 class="h2_baner2_text">30% OFFER</h2>
        <p class="baner2_text">FOR WOMEN</p>
      </div>
      <img
          src="@/assets/img/rectangle_21_copy_1314.jpg"
          alt=""
          class="baner2_img"
      />
    </div>
    <div class="baner2_bl_2">
      <div class="bl_2_cont_1">
        <div class="bl_2_text">
          <h3 class="bl_2_title">Free Delivery</h3>
          <p class="bl_2_p">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="bl_2_cont_2">
        <div class="bl_2_text">
          <h3 class="bl_2_title">Sales & discounts</h3>
          <p class="bl_2_p">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="bl_2_cont_3">
        <div class="bl_2_text">
          <h3 class="bl_2_title">Quality assurance</h3>
          <p class="bl_2_p">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "baner2"
}
</script>

<style scoped>

.bl_2_cont_2,
.bl_2_cont_3,
.bl_2_cont_1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  height: 155px;
  width: 373px;
  background-position: 36px 48px;
  background-repeat: no-repeat;
  background-size: auto;
}

.bl_2_cont_2 {
  background-image: url("~@/assets/img/forma_1_1340.svg");
}

.bl_2_cont_3 {
  background-image: url("~@/assets/img/forma_1_1341.svg");
}

.bl_2_cont_1 {
  background-image: url("~@/assets/img/forma_1_1322.svg");
}

.baner2_img {
  display: flex;
  max-width: 100%;
}

.baner2 {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 113px;
  max-width: 1140px;
  min-height: auto;
  background-color: #222224;
}

.baner2 .baner2_bl_1 {
  position: relative;
  width: 65%;
  height: auto;
}

.baner2 .baner2_bl_1 .ban2_t {
  position: absolute;
  margin-top: 10px;
  margin-right: 20px;
}

.baner2 .baner2_bl_1 .ban2_t .h2_baner2_text {
  margin-left: 39px;
  margin-top: 146px;
  font-size: 53.7px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #ffffff;
}

.baner2 .baner2_bl_1 .ban2_t .h2_baner2_text:nth-last-child(-n + 5) {
  color: #f16d7f;
}

.baner2 .baner2_bl_1 .ban2_t .baner2_text {
  margin-left: 39px;
  font-size: 53.7px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #ffffff;
}

.baner2 .baner2_bl_2 {
  display: flex;
  flex-direction: column;
  width: 373px;
  height: auto;
  float: left;
}

.baner2 .baner2_bl_2 .bl_2_cont_1 .bl_2_text,
.baner2 .baner2_bl_2 .bl_2_cont_2 .bl_2_text,
.baner2 .baner2_bl_2 .bl_2_cont_3 .bl_2_text {
  position: absolute;
  width: 219px;
  margin-top: 22px;
  margin-right: 45px;
  overflow: hidden;
}

.baner2 .baner2_bl_2 .bl_2_cont_1 .bl_2_text .bl_2_title,
.baner2 .baner2_bl_2 .bl_2_cont_2 .bl_2_text .bl_2_title,
.baner2 .baner2_bl_2 .bl_2_cont_3 .bl_2_text .bl_2_title {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #fbfbfb;
}

.baner2 .baner2_bl_2 .bl_2_cont_1 .bl_2_text .bl_2_p,
.baner2 .baner2_bl_2 .bl_2_cont_2 .bl_2_text .bl_2_p,
.baner2 .baner2_bl_2 .bl_2_cont_3 .bl_2_text .bl_2_p {
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #fbfbfb;
}

</style>