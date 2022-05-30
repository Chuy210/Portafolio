<template>
  <div class="about">
    <v-row class="mt-3">
      <v-col class="text-center yellow--text">
        <h1>About Me</h1>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col></v-col>
      <v-col  cols="10">
        <v-card color="#1FAAEE" :class="cardClass" sm="d-flex flex-row">
          <v-img
          class="imgPerfil rounded-circle"
          height="250"
          max-width="250"
          src="../assets/PhotoPerfil.png"
          ></v-img>
          <v-card-title class="titulo text-center white--text">
            Hi. I am Jesus Omar Cervantes Gonzalez <br>
            Frontend Developer with 1+ years of experience.<br>
            Passionate about learning new technologies and growing professionally.<br>
            This portfolio contains some of my work, and some projects I have done to learn new technologies.
          </v-card-title>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    computed: {
      cardClass(){
        let cardClass="";
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': 
            cardClass= "d-flex flex-column justify-center align-center";
            break;
          case 'sm': 
            cardClass= "d-flex flex-column justify-center align-center";
            break;
          case 'md': 
            cardClass= "d-flex flex-row justify-center align-center";
            break;
          case 'lg': 
            cardClass= "d-flex flex-row justify-center align-center";
            break;
          case 'xl': 
            cardClass= "d-flex flex-row justify-center align-center";
            break;
        }
        return cardClass;
      },
    },
  data() {
    return {
      //
    }
  },
}
</script>
<style lang="scss">
.v-sheet:not(.v-sheet--outlined) {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;
}
</style>
