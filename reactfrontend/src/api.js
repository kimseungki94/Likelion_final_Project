import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    //read text
    getAllPosts(){
        return axios.get('/posts');
    },
    //write text
    createPost(data){
        return axios.post('/posts/',data);
    },
    deletePost(id){
        return axios.delete('/posts/'+String(id))
    }
}