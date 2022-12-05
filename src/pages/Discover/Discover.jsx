import { Container, Row, Col, Button } from 'react-bootstrap'

import './Discover.css'

const Discover = () => {

    return (
        <Container className="Feed">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Discover!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Discover