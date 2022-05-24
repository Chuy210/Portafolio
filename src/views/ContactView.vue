<template>
  <v-app class="contact">
    <NavHeader/>
    <Contact/>
  </v-app>
</template>
<script>
import NavHeader from "../components/NavHeader.vue"
import Contact from "../components/Contact.vue"
export default {
    components:{
      Contact,NavHeader
    },
  data() {
    return {
      //
    }
  },
}
</script>