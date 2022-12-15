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
        <Container className="mt-5 Community">
            <div className="rf_Hero_SubTitle_Page mt-3 mb-4">
                <p>Where Feelings and People Meet</p>
            </div>

            <h1 className='rf_Hero_Title_Community'>Our Commmunity</h1>
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