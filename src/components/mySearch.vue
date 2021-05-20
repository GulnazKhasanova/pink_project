<template>
  <div class="search_inp_but">
    <div class="inp_search">
      <input type="text" class="search_input_shop" v-model="userSearch" />
    </div>
    <div class="but_search">
      <button
          @click.prevent="$parent.searchProduct(userSearch)"
          class="search_top">
        <img src="@/assets/img/59.png" alt="" class="search_img"
        /></button>
    </div>
<!--    <a-->
<!--      href="#"-->
<!--      @click.prevent="$parent.searchProduct(userSearch)"-->
<!--      class="search_top"-->
<!--      ></a>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSearch: "Search for Item...",
    };
  },
};
</script>
<style lang="scss" scoped>
.button_browse {
margin-left: 46px;
box-sizing: border-box;
padding-top: 3px;
font-size: 14px;
line-height: 32px;
font-weight: 300;
letter-spacing: 0.025em;
color: #222222;
display: inline-block;
text-align: center;
width: 87px;
height: 40px;
background-color: #cdcdcc;
background-image: linear-gradient(180deg, #f9f9f9 0%, #f5f5f5 100%);
border: 1px solid #e6e6e6;
border-radius: 3px 0px 0px 3px;
text-decoration: none;
vertical-align: middle;
}

.search_input_shop {
box-sizing: border-box;
width: 317px;
height: 40px;
background-color: #ffffff;
border: 1px solid #e6e6e6;
border-radius: 0 3px 3px 0;
padding-left: 10px;
  color: #a4a4a4;
  font-size: 14px;
  line-height: 32px;
  font-weight: 300;
  letter-spacing: 0.025em;
  vertical-align: middle;
}
.search_inp_but{
  display: flex;
  margin: auto;
  flex-direction: row;
}
.inp_search{
  display:flex;
  float: left;
}
.but_search {
  display:flex;
  float: left;
}
.search_input_shop[value] {
  padding-left: 10px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #a4a4a4;
}
.search_top {
  vertical-align: middle;
  border-radius: 0 3px 3px 0;
  width: 38px;
  height: 40px;
  border: 1px solid #e6e6e6;
  background: none;
}

.search_top:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

</style>
