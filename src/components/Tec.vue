<template>
  <div class="tec my-4">
    <v-row class="mt-2">
      <v-col class="text-center yellow--text">
        <h1>Technologies</h1>
      </v-col>
    </v-row>
    <!-- <v-row class="mx-1">
      <v-col
        v-for="(n, i) in img"
        :key="i"
        class="d-flex child-flex"
        cols="4"
        sm="3"
        md="2"
      >
        <v-img
          :src="n.src"
          aspect-ratio="1"
          max-width="150px"
          style="border-radius: 50%"
          class="TecImgs"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col>
        <div class="marquee">
          <div class="marquee--inner">
            <span>
              <v-row class="mx-1">
                <v-col
                  v-for="(n, i) in img"
                  :key="i"
                  class="d-flex child-flex logos"
                >
                  <v-img
                    :src="n.src"
                    aspect-ratio="1"
                    max-width="100px"
                    min-width="30px"
                    style="border-radius: 50%"
                    :title="n.title"
                    class="TecImgs"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  
                </v-col>
              </v-row>
            </span>
            <span>
              <v-row class="mx-1">
                <v-col
                  v-for="(n, i) in img2"
                  :key="i"
                  class="d-flex child-flex logos"
                >
                  <v-img
                    :src="n.src"
                    aspect-ratio="1"
                    max-width="100px"
                    min-width="30px"
                    style="border-radius: 50%"
                    :title="n.title"
                    class="TecImgs"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [
        { 
          title:"HTML",
          src: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
        { 
          title:"CSS",
          src: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
        { 
          title:"JavaScript",
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { 
          title:"SASS",
          src: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
      ],
      img2: [
        {
          title:"VUEJS",
          src: "https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/61435271fbe52607ec50931d_vue.png",
        },
        { 
          title:"VUETIFY",
          src: "https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png" },
        {
          title:"ZOHO",
          src: "https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png",
        },
        { 
          title:"HTML",
          src: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
      ],
    };
  },
};
</script>
<style lang="scss">
.TecImgs {
  .v-image__image {
    background-size: contain;
  }
}

.marquee {
  height: 30vh;
  width: 95vw;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

.marquee--inner {
  display: block;
  width: 200%;
  position: absolute;
  animation: marquee 15s linear infinite;
}

.marquee--inner:hover {
  animation-play-state: paused;
}
.logos{
  transition: all 0.2s ease-out;
  &:hover {
  transform: scale(1.2);
  opacity: 0.5;
  cursor: pointer;
  }
}

span {
  float: left;
  width: 50%;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
@media only screen and (max-width: 750px) {
 .marquee {
  height: 18vh;
  }
}
</style>
