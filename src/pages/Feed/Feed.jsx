import { Container, Row, Col,  } from 'react-bootstrap'

import NewPostForm from './../../components/newPostForm/NewPostForm'
import './Feed.css'

const Feed = () => {

    return (
        <Container className="Feed">
            <NewPostForm></NewPostForm>
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