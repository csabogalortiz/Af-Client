import { Container, Row, Col, Button } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'


import './Login.css'

const Login = () => {

    return (
        <Container className="Login">

            <h1>Log In!</h1>
            <hr />
            <LoginForm />


        </Container>
    )
}

export default Login

