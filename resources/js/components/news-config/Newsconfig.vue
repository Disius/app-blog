<template>
    <v-card width="1000" height="600" elevation="12">
        <v-card-title class="text-h6 bg-red-accent-3">Busqueda de Noticias</v-card-title>
        <v-card-text>
            <v-row justify="center" class="mt-2">
                <v-col cols="3">
                    <v-btn @click="getNews" block>
                        Nueva Busqueda
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-10">
                <v-col cols="12">
                    <v-table
                        fixed-header
                        height="400px"
                        hover

                    >
                        <thead>
                        <tr>
                            <th class="text-left">
                                Autor
                            </th>
                            <th class="text-left">
                                Titulo
                            </th>
                            <th class="text-left">
                                Publicado
                            </th>
                            <th class="text-left">
                                Quién publica
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-if="responseNews != null">
                            <tr
                                v-for="news in responseNews.articles"
                                :key="news.author"
                            >
                                <td>{{ news.author }}</td>
                                <td>{{ news.title }}</td>
                                <td>{{ news.publishedAt }}</td>
                                <td>{{ news.source.name }}</td>
                            </tr>
                        </template>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup>
//imports
import axios from "axios";
import {ref} from "vue";
import {useUserStore} from "../../store/Auth";

//code
const responseNews = ref(null);
const Auth = useUserStore();
const getNews = () => {
    axios.get('/api/news-sources', {
        headers: {
            'Authorization': `Bearer ${Auth.token}`,
        }
    }).then(res => {
        responseNews.value = res.data
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    })
}



</script>

<style scoped>

</style>
