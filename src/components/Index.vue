<template >
        <v-card class="main" >
            <Header />
            <v-row class="mx-1">
                <v-col>
                    <v-card 
                        background-color="white" 
                        height="40vh" 
                        tile>

                    </v-card>
                </v-col>
            </v-row>
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
    background-color: rgba(0, 0, 0, 0);
}
</style>