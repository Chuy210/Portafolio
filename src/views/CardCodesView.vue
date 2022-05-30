<template>
  <v-app class="cardCodes">
    <NavHeader/>
    <CardCodes/>
  </v-app>
</template>
<script>
import NavHeader from "../components/NavHeader.vue"
import CardCodes from "../components/CardCodes.vue"
export default {
    components:{
      CardCodes,NavHeader
    },
  data() {
    return {
      //
    }
  },
}
</script>