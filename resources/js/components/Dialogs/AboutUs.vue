<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto">
            <v-card max-width="500">
                <v-card-title></v-card-title>
                <v-spacer></v-spacer>
                <v-card-text>
                    <p>Mi nombre es Daniel Fernández y realice una pagina web sencilla de noticias
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="$emit('someEvent', false)">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import {computed} from "vue";

defineProps({
    dialog: Boolean
})


console.log()
</script>

<style scoped>

</style>
