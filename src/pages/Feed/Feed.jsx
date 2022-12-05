import { Container, Row, Col, Button } from 'react-bootstrap'


import './Feed.css'

const Feed = () => {

    return (
        <Container className="Feed">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>FEED!!</h1>
                    <hr />
                    <p>LOS POSTS VAN A SER UN CONTEXTO YA QUE VA ESTAR EN MUCHOS LUGARES</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Feed