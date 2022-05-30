<template>
  <div class="contact mt-4" >
    <!-- <v-row class="mt-2">
      <v-col class="text-center yellow--text">
        <h1>Contact</h1>
      </v-col>
    </v-row> -->
    <v-row v-if="hoverCont" class="mt-12 mb-2">
      <v-col>
        <h2 style="color:white">{{contact}}</h2>
      </v-col>
    </v-row>
     <v-row class="mx-1 my-0 " align-items="center">
       <v-col ></v-col>
      <v-col
        v-for="(n,i) in img"
        :key="i"
        class="d-flex child-flex"
        cols="3"
        sm="2" md="1" lg="1" xl="1"
      >
        <v-hover v-slot="{ hover }">
          <v-img
          class="imagenes"
            :src="n.src"
            aspect-ratio="1"
            max-width="150px"
            style="cursor:pointer"
            @click="copyText()"
          >
            <v-expand-transition v-if="hover" :hoverCont="hoverCont=hover" :contact="contact=n.contact">
            </v-expand-transition>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-hover>
      </v-col>
      <v-col></v-col>
    </v-row>
        <v-snackbar
      v-model="snackbar"
    >
      Copied Text

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
    computed:{
      hover(){
        console.log('teste');
        return "";
      }
    },
  data() {
    return {
      img:[
        {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png", contact:"jocg210@gmail.com"},
        {src:"https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png", contact:"8712178872"},
      ],
      contact:"jocg210@gmail.com",
      hoverCont:true,
      snackbar:false,
    }
  },
  methods:{
    copyText(){
      navigator.clipboard.writeText(this.contact);
      this.snackbar=true;
    }
  }
}
</script>
<style lang="scss">
.contact{
  background-image: url("../assets/contactBg6.gif");
  background-position-y: -130px;
  background-size: 100vw;
}

@media only screen and (max-width: 960px) {
.contact{
  background-image: url("../assets/contactBg7.gif");
  background-position-y: 0px;
  background-size: 100%;
}
}
@media only screen and (max-width: 600px) {
.contact{
  background-image: url("../assets/contactBg7.gif");
  background-size: auto 100%;
}
}
</style>