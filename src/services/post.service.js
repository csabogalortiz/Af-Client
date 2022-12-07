import axios from 'axios'

class PostService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/posts`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getPosts() {
        return this.api.get('/list')
    }

    detials(post_id) {
        return this.api.get(`/details/${post_id}`)
    }

    newPost(postData) {
        return this.api.post('/create', postData)
    }

    delete(post_id) {
        return this.api.post(`/delete/${post_id}`)
    }
}

const postService = new PostService()

export default postService