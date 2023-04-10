<template>
    <v-container>
        <v-row justify="center" class="mt-8">
            <NewsConfig></NewsConfig>
            <v-col cols="6">

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {useUserStore} from "../store/Auth";
import NewsConfig from "./news-config/Newsconfig.vue";
const storeUser = useUserStore()


console.log()
</script>

<style scoped>

</style>
