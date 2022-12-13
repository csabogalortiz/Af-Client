import axios from 'axios'

class FeelingService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/feelings`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getFeeling(feeling_id) {
        return this.api.get(`/${feeling_id}`)
    }

    getFeelings() {
        return this.api.get('/')
    }

    getRandomFeeling() {
        return this.api.get('/random',)
    }

    newFeeling(feelingData) {
        return this.api.post('/create', feelingData)
    }

    delete(feeling_id) {
        return this.api.post(`/delete/${feeling_id}`)
    }
}

const feelingService = new FeelingService()

export default feelingService