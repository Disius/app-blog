import {createApp, watch} from "vue";
import App from "./App.vue";
import {router} from "./routes/router";
import {vuetify} from "./plugins/vuetify"
import {pinia} from "./store/store";


const app = createApp(App);

if (localStorage.getItem("UserState")){
    pinia.state.value.userStore = JSON.parse(localStorage.getItem('UserState'));
}
watch(
    () => pinia.state.value.userStore,
    (state) => {
        localStorage.setItem('UserState', JSON.stringify(state))
    },
    {deep:true}
)
app.use(pinia).use(router).use(vuetify).mount('#app');
