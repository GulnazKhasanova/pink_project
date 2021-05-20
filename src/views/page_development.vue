<template>
<div class="catalog">
  <h2>This page in development.</h2>
  <h3>Sorry for the inconvenience</h3>
  <banner3></banner3>
</div>
</template>

<script>
import Banner3 from "@/components/baner3";

export default {
name: "page_development",
  components: { Banner3 }

}
</script>

<style scoped>
.catalog{
  margin-top: 120px;
  width: 100%;
}
@media (max-width: 838px) {
  .catalog{
    margin-top: 280px;
  }
}

</style>