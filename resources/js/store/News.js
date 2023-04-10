import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "./Auth";
export const useNewsStore = defineStore('news', () => {
    //state
    const News = ref({});
    const token = useUserStore().token;
    //getters

    //actions
    function getNews(){
        axios.get('/api/news-sources', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => {
            return res.data
        }).catch(error => {
            console.log(error)
        })
    }


    //return data

    //return {getNews, News}
})



