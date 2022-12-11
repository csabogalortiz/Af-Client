import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    getUsers() {
        return this.api.get('/')
    }

    followers(user_id) {
        return this.api.post(`/addfollower/${user_id}`)
    }

    favPost(post_id) {
        return this.api.post(`/favPost/${post_id}`)
    }

    details(user_id) {
        return this.api.get(`/${user_id}`)
    }

    newPost(userData) {
        return this.api.post('/create', userData)
    }

    delete(user_id) {
        return this.api.post(`/delete/${user_id}`)
    }
}

const userservice = new UserService()

export default userservice