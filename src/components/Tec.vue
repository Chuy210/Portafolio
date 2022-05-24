<template>
  <div class="tec my-4">
    <v-row class="mt-2">
      <v-col class="text-center white--text">
        <h1>Technologies</h1>
      </v-col>
    </v-row>
     <v-row class="mx-1">
      <v-col
        v-for="(n,i) in img"
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
        >
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
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    
  data() {
    return {
      img:[
        {src:"https://cdn-icons-png.flaticon.com/512/919/919827.png"},
        {src:"https://cdn-icons-png.flaticon.com/512/919/919826.png"},
        {src:"https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png"},
        {src:"https://cdn-icons-png.flaticon.com/512/919/919831.png"},
        {src:"https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/61435271fbe52607ec50931d_vue.png"},
        {src:"https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"},
      ]
    }
  },
}
</script>