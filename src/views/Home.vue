<template>
  <v-app class="home">
    <NavHeader/>
    <About/>
    <Tec/>
    <v-divider></v-divider>
    <Contact/>
  </v-app>
</template>

<script>
import  NavHeader  from "../components/NavHeader.vue";
import  About  from "../components/About.vue";
import  Tec  from "../components/Tec.vue";
import  Contact  from "../components/Contact.vue";
export default {
  name: 'Home',
  components:{
    NavHeader,About,Tec,Contact
  },
  data() {
    return {
      //
    }
  },
}
</script>
