import { Container, Row, Col, Button } from 'react-bootstrap'


import './Community.css'

const Community = () => {

    return (
        <Container className="Community">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Community!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Community