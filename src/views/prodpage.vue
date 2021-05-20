<template>
  <div class="prod-item">
    <h3 class="prod-item-h3"> {{ prod?.productName }} </h3>
    <img :src="prod?.productImg" alt="" class="prod-item-img">
    <p class="prod-item-p"> <span>PRICE :</span>{{ prod?.productPrice }} $</p>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  props: ['product'],
  methods: {
    ...mapActions({
      addItem: 'cart/incCart',
    }),
  },
  computed: {
     ...mapGetters({
      getItem: ['catalog/getItem']
    }), 
    prodItemId() {
      console.log(this.$route.params)
      return +this.$route.params.id;
    },
    prod() {
      return this.getItem(this.prodItemId);
    }
  }
};
</script>

<style >
.prod-item{
  margin-top: 200px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}
.prod-item-p{
  font-size: 28px;
  line-height: 26px;
  font-weight: 600;
}
.prod-item-p span{
  font-weight: 700;
}
.prod-item-h3{
  font-size: 45px;
  line-height: 26px;
  font-weight: 800;
}
.prod-item-img{
  margin: 45px auto;
  width: 80%;

}
</style>