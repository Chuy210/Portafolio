<template>
  <v-app class="about">
    <NavHeader/>
    <About/>
  </v-app>
</template>
<script>
import NavHeader from "../components/NavHeader.vue"
import About from "../components/About.vue"
export default {
    components:{
      About,NavHeader
    },
  data() {
    return {
      //
    }
  },
}
</script>