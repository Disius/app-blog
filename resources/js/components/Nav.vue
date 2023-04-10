<template>
        <v-layout>
            <v-navigation-drawer
                expand-on-hover
                rail
                floating
                permanent
                elevation="12"
            >
                <v-list>
                    <v-list-item
                    prepend-icon="mdi-menu"
                    >

                            <v-list-item-title></v-list-item-title>

                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item  @click="$router.push('/')" prepend-icon="mdi-home" title="Menu" value="myfiles">

                    </v-list-item>
                    <template v-if="userStore.Authenticated.value === true">
                        <v-list-item @click="router.push({path: '/mydash'})" prepend-icon="mdi-view-dashboard" title="Dashboard" link>

                        </v-list-item>
                    </template>
                    <template v-if="userStore.Authenticated.value === true">
                        <v-list-item @click="userStore.logout()" prepend-icon="mdi-logout" title="Cerrar Sesión" link>

                        </v-list-item>
                    </template>
                    <v-list-item @click="DialogAboutUs = true" prepend-icon="mdi-information-outline" title="About Us" value="about">
                    </v-list-item>
                    <AboutUs :dialog="DialogAboutUs" @some-event="myAction"></AboutUs>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
</template>

<script setup>
import {useUserStore} from "../store/Auth";
import {router} from "../routes/router";
import {ref} from "vue";
import AboutUs from "./Dialogs/AboutUs.vue";
const userStore = useUserStore();
const DialogAboutUs = ref(false);

function myAction(change){
    DialogAboutUs.value = change
}
</script>

<style scoped>

</style>
