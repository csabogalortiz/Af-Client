import { Container, Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
// import postService from './../../services/post.service'
import authService from '../../services/auth.service'
import './Profile.css'

const Profile = () => {
    const [user, setUser] = useState()
    const { user_id } = useParams()

    useEffect(() => {
        authService
            .details(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <Container className="Profile">
            !post
            ?
            <h1>Loading</h1>
            :
            <>
                <h1 className="mb-4">{user.username} Details </h1>
                <hr />

                <Row>

                    <Col>
                        <h3>Content</h3>
                        <p>{user.bio}</p>
                        <hr />

                        <Link to="/feed">
                            <Button as="div" variant="dark">Back</Button>
                        </Link>
                    </Col>



                </Row>
            </>



        </Container>
    )
}

export default Profile 