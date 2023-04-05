<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card width="400" height="400">

                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card width="400" height="400">

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {useUserStore} from "../store/Auth";

const storeUser = useUserStore()

console.log(storeUser.userInfo(), storeUser.token)
</script>

<style scoped>

</style>
