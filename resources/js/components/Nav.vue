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
                        <template v-if="userStore.Authenticated">
                            <v-list-item-title>{{userStore.user.email}}</v-list-item-title>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item  @click="$router.push('/')" prepend-icon="mdi-home" title="Menu" value="myfiles">

                    </v-list-item>
                    <template v-if="userStore.Authenticated">
                        <v-list-item @click="router.push({path: '/mydash'})" prepend-icon="mdi-view-dashboard" title="Dashboard" link>

                        </v-list-item>
                    </template>
                    <template v-if="userStore.Authenticated">
                        <v-list-item @click="userStore.logout()" prepend-icon="mdi-logout" title="Cerrar Sesión" link>

                        </v-list-item>
                    </template>
                </v-list>
            </v-navigation-drawer>
        </v-layout>

</template>

<script setup>
import {useUserStore} from "../store/Auth";
import {router} from "../routes/router";

const userStore = useUserStore()
</script>

<style scoped>

</style>
