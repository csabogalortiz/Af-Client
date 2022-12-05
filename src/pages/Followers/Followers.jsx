import { Container, Row, Col, Button } from 'react-bootstrap'


import './Followers.css'

const Followers = () => {

    return (
        <Container className="Followers">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Followers!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Followers