import { Container, Row, Col, Button } from 'react-bootstrap'


import './Profile.css'

const Profile = () => {

    return (
        <Container className="Profile">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Profile!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Profile