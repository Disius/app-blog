<template>
    <v-container>
        <v-row justify="center" class="mt-12">
            <v-card width="500" height="500" elevation="12">
                <v-card-title>Registro</v-card-title>

                <v-form ref="form" @submit.prevent="submit">
                    <v-card-text>
                        <v-row justify="center" class="">
                            <v-col cols="7">
                                <v-text-field variant="outlined" clearable label="Nombre" v-model="name">

                                </v-text-field>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field variant="outlined" clearable label="Email" v-model="email"
                                              type="email"
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field variant="outlined" clearable label="Contraseña" v-model="password"
                                              type="password"
                                >

                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row justify="end" class="mr-12">
                            <v-btn type="submit">
                                Registrarse
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
import {useUserStore} from "../../store/Auth";
import {ref} from "vue";
import {router} from "../../routes/router";

const register = useUserStore()
let auth = ref(false);

const name = ref("");
const email = ref("");
const password = ref("");

console.log(name.value)
const submit = () =>{
    register.register({name: name.value, email: email.value, password: password.value}).then(res => {
        router.push('/login')
    }).catch(error => {
        console.log(error)
    })
}
</script>

<style>

</style>
