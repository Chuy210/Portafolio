<template>
  <div class="about">
    <v-row class="mt-3">
      <v-col class="text-center white--text">
        <h1>About Me</h1>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col></v-col>
      <v-col  cols="10">
        <v-card color="#01237b" :class="cardClass" sm="d-flex flex-row">
          <v-img
          class="imgPerfil rounded-circle"
          height="250"
          max-width="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title class="text-center white--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit quas veniam, recusandae quae explicabo nostrum ipsam reprehenderit illo blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
