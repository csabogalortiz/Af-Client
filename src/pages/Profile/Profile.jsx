import { useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState, useContext } from "react"
import { Link, } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const UsersDetails = ({ isOwner }) => {

    let location = useLocation()
    console.log(location);

    const [userData, setUserData] = useState()

    const { user } = useContext(AuthContext)
    const params = useParams()
    let currentUser

    useEffect(() => {

        if (isOwner) {
            currentUser = user._id
        } else {
            currentUser = params.user_id
        }

        userservice
            .details(currentUser)
            .then(({ data }) => setUserData(data))
            .catch(console.error)
    }, [])

    return (

        <Container>

            {
                !userData
                    ?
                    <h1>Loading</h1>
                    :
                    <>
                        {/* <h1 className="mb-4">Detalles de {userData.username}</h1> */}
                        <hr />
                        {
                            isOwner
                                ?
                                <>
                                    <h1> My Profile {userData.username}</h1>

                                </>
                                :
                                <>
                                    <div>
                                        <h1 className="mb-4"> Someone's Profile {userData.username}</h1>
                                    </div>

                                </>

                        }





                        <Row>

                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>Especificaciones</h3>
                                <p>{userData.description}</p>
                                <ul>
                                    <li>Biografia: {userData.bio}</li>

                                </ul>
                                <hr />

                                <Link to="/feed">
                                    <Button as="div" variant="dark">Feed</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={userData.profileImg} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container >
    )
}

export default UsersDetails