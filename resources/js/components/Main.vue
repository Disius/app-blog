<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" >Hola</v-col>
            <v-col cols="6">
                <News></News>
            </v-col>
            <v-col cols="6" >Hola</v-col>
            <v-col cols="6" >Hola</v-col>
        </v-row>
    </v-container>
</template>

<script>
import News from "./News.vue";

export default {
    name: "Main",
    components: {News}
}
</script>

<style scoped>

</style>
