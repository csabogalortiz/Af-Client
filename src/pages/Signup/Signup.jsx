import { Container, Row, Col, Button } from 'react-bootstrap'
import SignupForm from '../../components/SingupForm/SingupForm'


import './Signup.css'

const Signup = () => {

    return (
        <Container className="Signup">

            <h1>Sign Up!</h1>
            <hr />
            <SignupForm />


        </Container>
    )
}

export default Signup

