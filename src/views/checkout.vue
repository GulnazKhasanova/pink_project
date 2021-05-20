<template>
  <div class="contentpage">

    <main>
      <div class="shipping_adress">
        <h2 class="shiping_">01. Shipping Adress</h2>
        <div class="check_register clearfix">
          <check> </check>
          <registed> </registed>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import Check from "@/components/check";
import Registed from "@/components/registed";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  components: { Registed, Check },
/*   data: () => ({
    email: "",
    password: "",
  }),
  
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(12) },
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      this.$router.push("/");
    },
  }, */
};
</script>

<style scoped>
.validate_form_invalid {
  font-size: small;
  color: red;
}
.shipping_adress {
  margin: 0 auto;
  max-width: 1140px;
  height: auto;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.shipping_adress > .shiping_ {
  display: block;
  margin-top: 89px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}

.shipping_adress > .check_register {
  width: 100%;
  height: 562px;
}
.paragraph1_6 {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1140px;
  height: 72px;
  border-bottom: 1px solid #eaeaea;
}

.paragraph1_6:last-child {
  margin-bottom: 93px;
}

.paragraph1_6 > .paragraph {
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}
</style>