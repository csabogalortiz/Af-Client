import { useEffect } from "react"
import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap"
import { useState, useContext } from "react"
import { Link, } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import DisplayCanvas from "../../components/Canvas/DisplayCanvas"
import Video from "../../components/Video/Video"
import PostCard from "../../components/PostCard/PostCard"
import YoutubeEmbed from './../../components/Video/Video'
import PostsList from "../../components/PostsList/PostsList"

import './Profile.css'

const UsersDetails = ({ isOwner }) => {

    // let location = useLocation()
    // console.log(location);

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
                                <ul>
                                    <li>Bio: {userData.bio}</li>

                                </ul>
                                <hr />
                                <Link to="/feed">
                                    <Button as="div" variant="dark">Feed</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={userData.profileImg} style={{ width: '100%' }} />
                            </Col>

                            <Col className="Followers">
                                <h3>Followers</h3>
                                {userData.followers.map(elem => {
                                    return (<div>
                                        <img src={elem.profileImg} />
                                        <h3>{elem.username}</h3>
                                    </div>)
                                })}
                                <hr />
                            </Col>

                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="My posts" title="My posts">
                                    <h2>My Posts </h2>
                                </Tab>
                                <Tab eventKey="My Favs" title="My Favs">
                                    {/* <div>{userData.favPosts} </div> */}

                                    <Col>
                                        <h3>My Favs</h3>
                                    <PostsList posts = {userData.favPosts}></PostsList>
                                        <hr />
                                    </Col>

 


                                </Tab>
                                <Tab eventKey="Compartidos" title="Compartidos">
                                    <h2>Compartidos </h2>
                                </Tab>

                            </Tabs>

                        </Row>
                    </>
            }

        </Container >
    )
}

export default UsersDetails