<template>
    <v-container>
        <v-row justify="center" class="mt-12">
            <v-card width="500" height="500" elevation="12">
                <v-card-title>
                    Simple Login
                </v-card-title>
                <v-spacer></v-spacer>
                <v-form ref="form" @submit.prevent="submit">
                    <v-card-text>
                        <v-container>
                            <v-row justify="center" class="mt-12">
                                <v-col cols="8">
                                    <v-text-field
                                        label="Email"
                                        v-model="email"
                                    >

                                    </v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <v-text-field
                                        label="Contraseña"
                                        type="password"
                                        v-model="password"

                                    >

                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-row justify="end" align="center">
                            <v-col cols="4">
                                <v-btn color="primary" type="submit">
                                    Ingresar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
import {useUserStore} from "../../store/Auth";
import {onMounted, ref} from "vue";
import {router} from "../../routes/router";
const Auth = useUserStore();

const email = ref('');
const password = ref('');


const submit = () => {
    Auth.login({email: email.value, password: password.value});
    router.push({path: '/mydash'})
}



</script>

<style scoped>

</style>
