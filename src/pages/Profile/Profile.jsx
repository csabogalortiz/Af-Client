import { useEffect,  } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState, useContext } from "react"
import { Link,  } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
const UsersDetails = () => {

    const [userData, setUserData] = useState()

    const  {user} = useContext(AuthContext)

    console.log(user)
    // console.log(user._id)
    useEffect(() => {
        userservice
            .details(user._id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.error(err))
    }, [])



    return (

        <Container>

            {
                !user
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <>
                        <h1 className="mb-4">Detalles de {user.username}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>Especificaciones</h3>
                                <p>{user.description}</p>
                                <ul>
                                    <li>Biografia: {user.bio}</li>
                                 
                                </ul>
                                <hr />

                                <Link to="/feed">
                                    <Button as="div" variant="dark">Feed</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={user.profileImg} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container >
    )
}

export default UsersDetails