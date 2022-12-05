import { Container, Row, Col, Button } from 'react-bootstrap'


import './PostDetails.css'

const PostDetails = () => {

    return (
        <Container className="PostDetails">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your PostDetails!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default PostDetails