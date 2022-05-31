<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="text-center light-blue--text">
        <h1>Portfolio</h1>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(1)"
        >
          <v-img
          contain
            src="../assets/loginPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            LogIn Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              class="techUsed"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/sassLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(2)"
        >
          <v-img
          contain
            src="../assets/foodPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Food Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/sassLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(3)"
        >
          <v-img
          contain
            src="../assets/tareasCRUD.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Tasks CRUD Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/sassLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(4)"
        >
          <v-img
          contain
            src="../assets/agregarTareasReactPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Tasks List
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/reactLogo.svg"
              >
              </v-img>
            </v-col>
            
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(5)"
        >
          <v-img
          contain
            src="../assets/CalcReactPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Calculator
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/reactLogo.svg"
              >
              </v-img>
            </v-col>
            
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(6)"
        >
          <v-img
          contain
            src="../assets/clicksReactPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Click Counter
          </v-card-title>

          <v-row>
      <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/reactLogo.svg"
              >
              </v-img>
            </v-col>
            
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(7)"
        >
          <v-img
          contain
            src="../assets/testimoniosReactPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            FCC Students Comments
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/reactLogo.svg"
              >
              </v-img>
            </v-col>
            
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(8)"
        >
          <v-img
          contain
            src="../assets/PokerPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Poker Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(9)"
        >
          <v-img
          contain
            src="../assets/hospitalPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Hospital Records Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(10)"
        >
          <v-img
          contain
            src="../assets/contadorVuePage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Counter Vue Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(11)"
        >
          <v-img
          contain
            src="../assets/degradadosPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Gradient Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(12)"
        >
          <v-img
          contain
            src="../assets/moviesPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Movies Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(13)"
        >
          <v-img
          contain
            src="../assets/gifRouterPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Gif Router Page
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card
          class="tarjetas mx-auto"
          max-width="344"
          color="rgb(52, 73, 94)"
          @click="linkPage(14)"
        >
          <v-img
          contain
            src="../assets/proyectsRegisterPage.png"
            height="200px"
            class="imagenes"
          ></v-img>

          <v-card-title class="text-center orange--text" >
            Proyects Register
          </v-card-title>

          <v-row>
            <v-col></v-col>
            <v-col cols="2">
              <v-img
              src="../assets/htmlLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/cssLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/jsLogo.svg"
              >
              </v-img>
            </v-col>
            <v-col cols="2">
              <v-img
              src="../assets/vueLogo.svg"
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
      //
      
    }),
    methods:{
      linkPage(num){
        switch (num) {
          case 1:
            window.open('https://dainty-sprinkles-6dfe59.netlify.app/', '_blank');
            break;
          case 2:
            window.open('https://glowing-crepe-8267b5.netlify.app/', '_blank');
            break;
          case 3:
            window.open('https://spectacular-palmier-7b0bb6.netlify.app/', '_blank');
            break;
          case 4:
            window.open('https://incomparable-puffpuff-89d973.netlify.app/', '_blank');
            break;
          case 5:
            window.open('https://glowing-medovik-6b13fa.netlify.app/', '_blank');
            break;
          case 6:
            window.open('https://transcendent-dragon-3f423c.netlify.app/', '_blank');
            break;
          case 7:
            window.open('https://vocal-hamster-a14a13.netlify.app/', '_blank');
            break;  
          case 8:
            window.open('https://rad-kitsune-cf0ceb.netlify.app/', '_blank');
            break; 
          case 9:
            window.open('https://cerulean-raindrop-495bf5.netlify.app/', '_blank');
            break;
          case 10:
            window.open('https://wondrous-tarsier-181793.netlify.app/', '_blank');
            break;
          case 11:
            window.open('https://helpful-paletas-d0e245.netlify.app/', '_blank');
            break;
          case 12:
            window.open('https://magical-squirrel-5d54f1.netlify.app/', '_blank');
            break;
          case 13:
            window.open('https://unrivaled-florentine-06266a.netlify.app/', '_blank');
            break;
          case 14:
            window.open('https://papaya-cupcake-8f6c3c.netlify.app/', '_blank');
            break;
          default:
            break;
        }
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