<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="text-center light-blue--text">
        <h1>Portfolio</h1>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col
      v-for="(code, i) in cardCodes"
      :key="i"
      cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(code.pagWeb)"
        >
          <v-img
          contain
            :src="code.src"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            {{code.title}}
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col 
            v-for="(logos, i) in code.logos"
            :key="i"
            cols="2">
              <v-img
              :src="logos.src"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      cardCodes:[
        {
          id:1,
          title:'LogIn Page',
          src:require('../assets/loginPage.png'),
          pagWeb:'https://dainty-sprinkles-6dfe59.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/sassLogo.svg')},
          ]
        },
        {
          id:2,
          title:'Food Page',
          src:require('../assets/foodPage.png'),
          pagWeb:'https://glowing-crepe-8267b5.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/sassLogo.svg')},
          ]
        },
        {
          id:3,
          title:'Tasks CRUD Page',
          src:require('../assets/tareasCRUD.png'),
          pagWeb:'https://spectacular-palmier-7b0bb6.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
            {src:require('../assets/sassLogo.svg')},
          ]
        },
        {
          id:4,
          title:'Tasks List',
          src:require('../assets/agregarTareasReactPage.png'),
          pagWeb:'https://incomparable-puffpuff-89d973.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/reactLogo.svg')},
          ]
        },
        {
          id:5,
          title:'Calculator',
          src:require('../assets/CalcReactPage.png'),
          pagWeb:'https://glowing-medovik-6b13fa.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/reactLogo.svg')},
          ]
        },
        {
          id:6,
          title:'Click Counter',
          src:require('../assets/clicksReactPage.png'),
          pagWeb:'https://transcendent-dragon-3f423c.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/reactLogo.svg')},
          ]
        },
        {
          id:7,
          title:'FCC Students Comments',
          src:require('../assets/testimoniosReactPage.png'),
          pagWeb:'https://vocal-hamster-a14a13.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/reactLogo.svg')},
          ]
        },
        {
          id:8,
          title:'Poker Page',
          src:require('../assets/PokerPage.png'),
          pagWeb:'https://rad-kitsune-cf0ceb.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:9,
          title:'Hospital Records',
          src:require('../assets/hospitalPage.png'),
          pagWeb:'https://cerulean-raindrop-495bf5.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:10,
          title:'Counter Vue Page',
          src:require('../assets/contadorVuePage.png'),
          pagWeb:'https://wondrous-tarsier-181793.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:11,
          title:'Gradient Page',
          src:require('../assets/degradadosPage.png'),
          pagWeb:'https://helpful-paletas-d0e245.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:12,
          title:'Movies Page',
          src:require('../assets/moviesPage.png'),
          pagWeb:'https://magical-squirrel-5d54f1.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:13,
          title:'Gif Router Page',
          src:require('../assets/gifRouterPage.png'),
          pagWeb:'https://unrivaled-florentine-06266a.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
        },
        {
          id:14,
          title:'Proyects Register',
          src:require('../assets/proyectsRegisterPage.png'),
          pagWeb:'https://papaya-cupcake-8f6c3c.netlify.app/',
          logos:[
            {src:require('../assets/htmlLogo.svg')},
            {src:require('../assets/cssLogo.svg')},
            {src:require('../assets/jsLogo.svg')},
            {src:require('../assets/vueLogo.svg')},
          ]
       }
      ]
      
    }),
    methods:{
      linkPage(pagWeb){
        window.open(pagWeb, '_blank');
      },
    }
  }
</script>
<style lang="scss">
.v-card__title {
  display: block;
  text-align: center !important;
}
.tarjetas{
  &:hover{
    opacity: .9;
    transform: scale(1.05);
  }
  .imagenes{
    opacity: 0.5;
  }
  .imagenes:hover{
    opacity: .9;
  }
}
</style>