<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="text-center yellow--text">
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