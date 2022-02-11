<template >
        <v-card class="main px-2" >
            <Header />
            <p>Final</p>
        </v-card>
</template>
<script>
import Header from './Header'
export default {
    components:{Header},

}
</script>
<style scoped>
.main{
    height:100vh;
    background-color: rgba(0, 0, 0, 0);
}
</style>