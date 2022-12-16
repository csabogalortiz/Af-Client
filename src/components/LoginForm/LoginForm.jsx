import { useState, useContext } from "react"
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import authService from "../../services/auth.service"
import ErrorMessage from './../ErrorMessage/ErrorMessage'
import './LoginForm.css'


const LoginForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    })


    const [errors, setErrors] = useState([])
    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()
    const { storeToken, authenticateUser } = useContext(AuthContext)


    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(signupData)
            .then(({ data }) => {
                const tokenFromServer = data.authToken
                storeToken(tokenFromServer)
                authenticateUser()
                navigate(`/feed`)
            })
            .catch(err => console.log(err))
    }

    const { password, email } = signupData

    return (

        <Container className='loginCard'>
            <Row>
                <Col xs={6} className=" rf_Hero_login_Login d-flex justify-content-around align-items-center ml-3 mb-2 mt-10" >
                    <h1 className="rf_Hero_login_Login"> Welcome To The Space Where Art & Feelings Meet. </h1>


                </Col>
                <Col xs={6}>
                    <Form className="login-form" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                        </Form.Group>


                        <div className="d-grid">
                            <Button variant="outline-light rounded" type="submit" size="lg" >ACCESS</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm