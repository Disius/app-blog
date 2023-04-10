import {createApp, watch} from "vue";
import App from "./App.vue";
import {router} from "./routes/router";
import {vuetify} from "./plugins/vuetify"
import {Pina} from "./store/store";


const app = createApp(App);

if (localStorage.getItem("UserState")){
    Pina.state.value.userStore = JSON.parse(localStorage.getItem('UserState'));
}
watch(
    () => Pina.state.value.userStore,
    (state) => {
        localStorage.setItem('UserState', JSON.stringify(state))
    },
    {deep:true}
)






app.use(Pina).use(router).use(vuetify).mount('#app');

