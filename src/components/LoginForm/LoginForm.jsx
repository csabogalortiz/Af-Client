import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import { AuthContext } from "../../contexts/auth.context"
// import { MessageContext } from "../../contexts/userMessage.context"
import authService from "../../services/auth.service"



const LoginForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()
    // const { storeToken, authenticateUser } = useContext(AuthContext)
    // const { setShowToast, setToastMessage } = useContext(MessageContext)

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(signupData)
            .then(({ data }) => {
                console.log('Todo OK ----->', data)
                // const tokenFromServer = data.authToken
                // storeToken(tokenFromServer)
                // authenticateUser()
                // setShowToast(true)
                // setToastMessage('Sesión iniciada')
                navigate('/feed')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Access</Button>
            </div>

        </Form>
    )
}

export default LoginForm