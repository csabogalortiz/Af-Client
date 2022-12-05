import { Container, Row, Col, Button } from 'react-bootstrap'


import './Feeling.css'

const Feeling = () => {

    return (
        <Container className="Feeling">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Feeling!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Feeling