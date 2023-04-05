import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import axios from "axios";
import {pinia} from "./store";
import {router} from "../routes/router";


export const useUserStore = defineStore('userStore', () => {
    //state
    let isAuth = ref(false);
    let token = ref("");
    let user = ref({});

    //getters
    const Authenticated = computed(()=>{
        return isAuth
    })

    //actions
    function  login({email, password}){
        axios.post('/api/login', {email, password})
            .then(res => {
                this.$patch({
                    isAuth: true,
                    token: res.data.token
                })
            }).catch(error => {
            console.log(error)
        })
    }
    function userInfo(){
        axios.get('/api/user', {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        }).then(res => {
           this.$patch({
               user: res.data
           })
        }).catch(error => {
            console.log(error)
        })
    }

    function logout(){
        axios.post('/api/logout', {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        }).then(res => {
            console.log(res)
            $reset()
            router.push('/')
        }).catch(error => {
            console.log(error)
        })
    }

    //reset the state
    function $reset() {
        token.value = null;
        user.value = null;
        isAuth.value = false;
    }


    //return data
    return { login, userInfo, logout, Authenticated, isAuth, token, user }
});
