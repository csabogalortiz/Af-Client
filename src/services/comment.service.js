import axios from 'axios'

class CommentService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comments`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getComment() {
        return this.api.get('/')
    }

    newComment(commentData, post_id) {

        return this.api.post(`/create/${post_id}`, commentData)
    }

}

const commentService = new CommentService()

export default commentService