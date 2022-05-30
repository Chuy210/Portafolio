<template>
  <v-app class="home">
    <NavHeader/>
    <About/>
    <div class="separador"/>
    <Tec/>
    <div class="separador"/>
    <CardCodes/>
    <Contact/>
  </v-app>
</template>

<script>
import  NavHeader  from "../components/NavHeader.vue";
import  About  from "../components/About.vue";
import  Tec  from "../components/Tec.vue";
import  Contact  from "../components/Contact.vue";
import  CardCodes  from "../components/CardCodes.vue";
export default {
  name: 'Home',
  components:{
    NavHeader,About,Tec,Contact,CardCodes
  },
  data() {
    return {
      //
    }
  },
}
</script>
<style lang="scss">
.separador{
  margin:10px 0px; 
  background-color: #06206e;
  height: 20px;
}
</style>
