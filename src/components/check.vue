<template>
  <div class="check">
    <p class="guest">Check as a guest or register</p>
    <p class="sub_guest">Register with us for future convenience</p>
    <form
        method="post"
        name="log_in"
        action=""
        @submit.prevent="$parent.submitHandler"
    >
      <div class="radio">
        <div>
          <input type="radio" id="gast_radio" name="a" />
          <label for="gast_radio" class="label_radio"
          >checkout as guest</label
          >
        </div>
        <div>
          <input type="radio" id="register_radio" name="a" checked />
          <label for="register_radio" class="label_radio"
          >register</label>
        </div>
      </div>
      <p class="save_tame">register and save time!</p>
      <p class="sub_guest">Register with us for future convenience</p>
      <p class="sub_guest" style="padding-top: 15px">
        <i class="fa-angle-double-right" aria-hidden="true"></i> Fast
        and easy checkout
      </p>
      <p class="sub_guest" style="padding-bottom: 38px">
        <i class="fa-angle-double-right" aria-hidden="true"></i> Easy
        access to your order history and status
      </p>
      <button type="submit" class="continue">Continue</button>
    </form>
  </div>
</template>

<script>

export default {
name: "check"
}
</script>

<style scoped>

#gast_radio,
#register_radio {
  display: inline-block;
  float: left;
  margin-top: 3px;
  margin-bottom: 20px;
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border: 2px solid #555555;
}

.check {
  display: flex;
  flex-direction: column;
  float: left;
  padding: 34px 35px;
  width: 50%;
  min-width: 390px;
  height: auto;
  box-sizing: border-box;
}
.save_tame {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
}

.fa-angle-double-right {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #b3b2b2;
}

.check p {
  margin: 8px;
}

.continue {
  width: 180px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
}

.radio {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
}

.label_radio {
  margin: 0 15px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
}

.sub_guest {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #b3b2b2;
}

.guest {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
}

.sub_guest {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #b3b2b2;
}
</style>