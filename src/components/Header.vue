<template>
  <v-card class="navBar">
    <v-app-bar dark tile>
      <v-app-bar-nav-icon @click="drawerChange()"></v-app-bar-nav-icon>
      <NavDrawer class="navigationDrawer"/>
      <v-row class="allContent ma-0 d-flex align-center justify-center">
        <v-col class="pa-0 d-flex align-center ">
          <v-img 
          src="../assets/WhiteLogo.svg"
          max-height="82px"
          max-width="250px"
          class=" mb-5 ml-2"
          style="cursor: pointer;"
          ></v-img>
        </v-col>
      </v-row>
       <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

  </v-card>
</template>
<script>
import NavDrawer from "./NavDrawer.vue"
export default {
  components:{NavDrawer},
  computed:{
    drawer:{
      get(){
        return this.$store.state.headerModule.drawer;
      },
      set(data){
        this.$store.commit('headerModule/setdrawer', data);
      }
    },
  },
  data(){
    return{
      //
    }
  },
  methods:{
    drawerChange(){
      if(this.drawer){
          this.$store.commit('headerModule/setdrawer', false);
        }else{
          this.$store.commit('headerModule/setdrawer', true);
        }
    }
  }
}
</script>
<style>
.allContent{
  position: inherit;
}
</style>