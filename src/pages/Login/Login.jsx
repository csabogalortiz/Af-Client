import { Container, Row, Col, Button } from 'react-bootstrap'


import './Login.css'

const Login = () => {

    return (
        <Container className="Login">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Login!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Login