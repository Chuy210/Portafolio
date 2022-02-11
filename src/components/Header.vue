<template>
  <v-card class="navBar">
    <v-app-bar dark >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Omar</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
    data(){
        return{
            drawer: false,
            group: null,
        }
    }
}
</script>
<style>
.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + :not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
}
.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
}
</style>