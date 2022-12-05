import { Container, Row, Col, Button } from 'react-bootstrap'
import SignupForm from '../../components/SingupForm/SingupForm'


import './Signup.css'

const Signup = () => {

    return (
        <Container className="Signup">

            <Row>

                <Col md={{ span: 3, offset: 6 }}>

                    <h1>Sign Up!</h1>
                    <hr />
                    <SignupForm />
                </Col>

            </Row>

        </Container>
    )
}

export default Signup

