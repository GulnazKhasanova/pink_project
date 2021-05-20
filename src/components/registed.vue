<template>
  <div class="registed">
    <p class="guest">Already registed?</p>
    <p class="sub_guest">Please log in below</p>
    <form method="post" name="log_in" action="" @submit.prevent="submitForm">
      <div class="text_login">
        <label for="gast_email" class="email_password"
          >EMAIL ADDRESS <span class="zvezda">*</span>
        </label>
        <input class="bangladesh" v-model="email" />
        <div v-if="v$.email.$error">Name field has an error.</div>

        <label for="gast_password" class="email_password"
          >PASSWORD <span class="zvezda">*</span></label
        >
        <input class="bangladesh" v-model="password" />
        <div v-if="v$.password.$error">Name field has an error.</div>

      </div>
      <p class="required_fileds" style="padding-bottom: 22px">
        *Required Fileds
      </p>
      <button type="submit" class="continue">Log in</button>
      <a href="" class="forgot">Forgot Password ?</a>
    </form>
  </div>
</template>

<script>
import Check from "@/components/check";
import Registed from "@/components/registed";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
export default {
  components: { Registed, Check },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
      requiredNameLength: 8
    };
  },
  validations() {
    return {
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(this.requiredNameLength),
        required
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$touch();
      if (this.v$.$error) return;
      console.log("send to servere..");
    },
  },

};
</script>

<style scoped>
.registed {
  display: flex;
  flex-direction: column;
  float: left;
  padding: 34px 35px;
  width: 50%;
  min-width: 390px;
  height: auto;
  box-sizing: border-box;
}

.registed .text_login {
  margin: 0 auto;
  width: 76%;
  display: flex;
  flex-direction: column;
}

.registed .text_login .email_password {
  padding-top: 16px;
  padding-bottom: 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #222222;
}

.registed .text_login .zvezda {
  color: #ff0d0d;
}

.registed .required_fileds {
  padding-top: 16px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #ff0d0d;
}

.registed .forgot {
  margin-left: 32px;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #222222;
}
.bangladesh {
  max-width: 360px;
  padding: 16px 18px 16px 18px;
  color: #b1b1b1;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  border: 1px solid #b1b1b1;
  margin-bottom: 20px;
  margin-right: 32px;
  border: 1px solid #eaeaea;
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

#gast_email,
#gast_password {
  width: 390px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}

#gast_password[type="text"],
#gast_email[type="text"] {
  padding-left: 7px;
}
</style>