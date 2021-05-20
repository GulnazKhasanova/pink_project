<template>
  <div class="baner1">
    <div class="img_baner1"></div>
    <div class="text_baner1">
      <h2 class="text_content">THE BRAND</h2>
      <h3 class="text_content text_content2">OF LUXERIOUS FASHION</h3>
    </div>
  </div>
</template>

<script>
export default {
name: "baner1"
}
</script>

<style scoped>
.baner1 {
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  display: flex;
  position: relative;
 /* max-width: 1600px;*/
  height: 785px;
  background-image: url("~@/assets/img/image_frame_84.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.baner1 .img_baner1 {
  transform: translateX(-20px);
  margin-top: 224px;
  margin-left: 25%;
  margin-right: 25%;
  position: absolute;
  width: 12px;
  height: 92px;
  background-color: #f16d7f;
}

.baner1 .text_baner1 {
  margin-left: 25%;
  margin-right: 25%;
  position: absolute;
  margin-top: 208px;
  }

.baner1 .text_baner1 .text_content {
  font-size: 60px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: 0.025em;
  color: #222222;
  text-align: left;
}

.baner1 .text_baner1 .text_content2 {
  font-size: 40px;
}

.baner1 .text_baner1 .text_content2:nth-last-child(-n + 7) {
  color: #f16d7f;
}


</style>