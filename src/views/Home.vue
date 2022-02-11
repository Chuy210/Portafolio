<template>
  <v-app class="home">
    <Index />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Index from '../components/Index.vue'

export default {
  name: 'Home',
  components: {
    Index
  }
}
</script>
