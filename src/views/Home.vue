<template>
  <v-app class="home">
    <v-card
    color="grey lighten-4"
    flat
    tile >
      <v-toolbar class="primary font-weight-black white--text" prominent
      src="../assets/webBackground3.png" >

        <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>

        <v-toolbar-title >JESUS OMAR CERVANTES GONZALEZ</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon class="white--text">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" temporary dark>
        <v-row class="flex-column">
          <v-col class="d-flex align-center justify-center mt-4">
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="Omar"
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex align-center justify-center white--text mt-3 headline">
            <p>Omar Cervantes</p>
          </v-col>
        </v-row>
        <v-row class="flex-column mx-1">
          <v-col  >
            <v-btn class="my-2" color="#268E00" block :to="{name: 'home'}">Home</v-btn>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </v-card>
    <About/>
    <Tec/>
    <v-divider></v-divider>
    <Contact/>
  </v-app>
</template>

<script>
import  About  from "./About.vue";
import  Tec  from "../components/Tec.vue";
import  Contact  from "./Contact.vue";
export default {
  name: 'Home',
  components:{
    About,Tec,Contact
  },
  data() {
    return {
      drawer:false
    }
  },
}
</script>
