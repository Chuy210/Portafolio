<template>
  <v-card
  color="grey lighten-4"
  flat
  tile >
  <v-toolbar
  class="primary font-weight-black white--text" 
  prominent
  src="../assets/webBackground3.png" >

    <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>

    <v-toolbar-title >
      JESUS OMAR CERVANTES GONZALEZ
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(socials, i) in socials"
              :key="i"
              @click="linkPage(1)"
            >
              <v-btn
                :color="socials.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{socials.icon}}</v-icon>
              </v-btn>
              <v-list-item-title>{{ socials.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-menu>
  </v-toolbar>
  <v-navigation-drawer app v-model="drawer" temporary dark>
    <v-row class="flex-column">
      <v-col class="d-flex align-center justify-center mt-4">
        <v-avatar>
          <img
            src="../assets/PhotoPerfil.png"
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
        <v-btn class="my-2" color="#268E00" block :to="{name: 'cardCodes'}">Portfolio Apps</v-btn>
        <v-btn class="my-2" color="#268E00" block :to="{name: 'about'}">About me</v-btn>
        <v-btn class="my-2" color="#268E00" block :to="{name: 'contact'}">Contact</v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer:false,
      socials: [
        {
          title: 'Linkedin',
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
      ],
    }
  },
  methods:{
     linkPage(num){
        switch (num) {
          case 1:
            window.open('https://mx.linkedin.com/in/jesusomarcervantes', '_blank');
            break;
          default:
            break;
        }
      },
  }
}
</script>