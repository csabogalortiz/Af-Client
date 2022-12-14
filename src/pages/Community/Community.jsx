import './Community.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from './../../components/Loader/Loader'
import UsersList from '../../components/UsersList/UsersList'
import UserService from '../../services/user.service'
import { useState, useEffect } from "react"

const Community = () => {

    const [users, setUsers] = useState()
    const [refresh, setRefresh] = useState(null)

    const loadUsers = () => {
        UserService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUsers()
    }, [refresh])


    return (
        <Container className="Community">

            <h1>Welcome to our Commmunity!!</h1>
            <p>Where Feelings and People Meet</p>
            <hr />

            <Row>

                <Col md={{ span: 8, offset: 2 }}>
                    {!users ? <Loader /> : <UsersList users={users} setRefresh={setRefresh} />}

                    <Link to="/feed">
                        <Button as="div" variant="dark">Feed</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default Community