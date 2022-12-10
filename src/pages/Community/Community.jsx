import './Community.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import UsersList from '../../components/UsersList/UsersList'
import UserService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'
import { useState, useEffect, useContext } from "react"
import Loader from './../../components/Loader/Loader'
import { Link } from 'react-router-dom'

const Community = () => {

    const [users, setUsers] = useState()

    const loadUsers = () => {
        UserService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUsers()
    }, [])


    return (
        <Container className="Community">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>
                    {!users ? <Loader /> : <UsersList users={users} />}

                    <h1>Hii!!</h1>
                    <hr />
                    <p>Im your Community!</p>

                    <Link to="/feed">
                        <Button as="div" variant="dark">Feed</Button>
                    </Link>

                </Col>



            </Row>

        </Container>
    )
}

export default Community