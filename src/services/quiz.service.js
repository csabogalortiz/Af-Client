// import axios from 'axios'

// class QuizService {

//     constructor() {

//         this.api = axios.create({
//             baseURL: `${process.env.REACT_APP_API_URL}/quiz`
//         })
//         this.api.interceptors.request.use((config) => {

//             const storedToken = localStorage.getItem("authToken");

//             if (storedToken) {
//                 config.headers = { Authorization: `Bearer ${storedToken}` }
//             }

//             return config
//         })
//     }

//     getQuiz() {
//         return this.api.get('/')
//     }

// }


// const quizService = new QuizService()

// export default feelingService