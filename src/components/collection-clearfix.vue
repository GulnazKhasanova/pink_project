<template>
  <div class="collection clearfix">
    <div class="block_2">
      <div class="img_block2">
        <div class="text_cont">
          <p class="t_cont1">hOT dEAL</p>
          <p class="t_cont2">FOR MEN</p>
        </div>
        <img
            src="@/assets/img/rectangle_19_1130.jpg"
            alt=""
            class="content_img"
        />
      </div>
      <div class="img_block2_b">
        <div class="text_cont">
          <p class="t_cont1">LUXIROUS & trendy</p>
          <p class="t_cont2">ACCESORIES</p>
        </div>
        <img
            src="@/assets/img/rectangle_19_copy_3_1144.jpg"
            alt=""
            class="content_img_b"
        />
      </div>
    </div>
    <div class="block_2">
      <div class="img_block2_b">
        <div class="text_cont">
          <p class="t_cont1">30% offer</p>
          <p class="t_cont2">women</p>
        </div>
        <img
            src="@/assets/img/rectangle_19_copy_1136.jpg"
            alt=""
            class="content_img_b"
        />
      </div>
      <div class="img_block2">
        <div class="text_cont">
          <p class="t_cont1">new arrivals</p>
          <p class="t_cont2">FOR kids</p>
        </div>
        <img
            src="@/assets/img/rectangle_19_copy_2_1137.jpg"
            alt=""
            class="content_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "collection-clearfix"
}
</script>

<style scoped>
.collection {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.collection .block_2 {
  margin: 10px auto;

  display: flex;
  float: left;
  flex-direction: column;
  width: 560px;
  height: 824px;
}

.collection .block_2 .img_block2 {
  margin-bottom: 20px;
  position: relative;
  width: 560px;
  height: 542px;
}
.img_block2:hover {
  opacity: 80%;
}
.img_block2_b:hover{
  opacity: 80%;
}

.collection .block_2 .img_block2 .text_cont {
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  position: absolute;
  height: 82px;
  background-color: #ffffff;
}

.collection .block_2 .img_block2 .text_cont .t_cont1 {
  font-size: 18px;
  line-height: 1.2;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #222222;
}
p.t_cont1{
  margin-top: 10px;
}

.collection .block_2 .img_block2 .text_cont .t_cont2 {
  line-height: 1.2;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-size: 30px;
  color: #f16d7f;
}

.collection .block_2 .img_block2 .content_img {
  width: 560px;
  height: 542px;
}

.collection .block_2 .img_block2_b {
  margin-right: 21px;
  margin-bottom: 20px;
  position: relative;
  width: 560px;
  height: 261px;
}

.collection .block_2 .img_block2_b .text_cont {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 27px;
  position: absolute;
  height: 82px;
  background-color: #ffffff;
  justify-content: center;
}

.collection .block_2 .img_block2_b .text_cont .t_cont1 {
  font-size: 18px;
  line-height: 1.2;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #222222;
}

.collection .block_2 .img_block2_b .text_cont .t_cont2 {
  line-height: 1.2;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-size: 30px;
  color: #f16d7f;
}

.collection .block_2 .img_block2_b .content_img_b {
  width: 560px;
  height: 261px;
}
@media (max-width: 576px) {
  .block_2, .img_block2_b, .img_block2, .content_img_b,.content_img {
    width: 100% !important;
    height: auto!important;
  }
  .block_2{
    margin: 2% 2%!important;
  }
}
</style>