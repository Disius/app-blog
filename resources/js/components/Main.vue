<template>
    <v-card max-width="1700" class="mx-auto">
        <v-container>
            <v-row justify="center">
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="news in newsArray"
                                :key="news.author" cols="6"
                            >
                                <v-card link height="400" :href="news.url">
                                    <v-img :src="news.urlToImage"
                                           class="align-end"
                                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                           height="400px"
                                           cover

                                    >
                                        <v-card-title class="text-h5 text-white">{{news.title}}</v-card-title>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup>
//imports
import axios from "axios";
import {onMounted, ref} from "vue";

let newsArray = ref(null);



onMounted(() => {
    axios.get('/api/news-sources-withoutCall')
        .then(res => {
            newsArray.value = res.data.articles
        }).catch(error => {
        console.log(error)
    })
})

</script>

<style scoped>

</style>
