import { useEffect } from "react"
import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap"
import { useState, useContext } from "react"
import { Link, } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import PostsList from "../../components/PostsList/PostsList"
import PostService from "../../services/post.service"

import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

import './Profile.css'

const UsersDetails = ({ isOwner }) => {


    const [userData, setUserData] = useState()
    const [myPostsData, setmyPostsData] = useState(
        []
    )

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

        PostService
            .createdPosts(user._id)
            .then(({ data }) => setmyPostsData(data))
            .catch(err => console.error(err))

    }, [params])

    const handleFollow = (elem) => {
        console.log(elem._id)
        userservice
            .followers(elem._id)
            .then(() => { })
            .catch(err => console.log(err))

    }


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
                                <h3>Following</h3>
                                {userData.followers.map(elem => {
                                    return (<div>
                                        {/* <Link to={`/profile/${elem._id}`} activeclassname="activeClicked" >
                                            <img src={elem.profileImg} />
                                        </Link> */}
                                        {/* <h3>{elem.username}</h3> */}


                                        <Group position="center">
                                            <HoverCard width={230} shadow="md" withArrow openDelay={200} closeDelay={400}>
                                                <HoverCard.Target>
                                                    <Avatar src={elem.profileImg} radius="x4 " />
                                                </HoverCard.Target>
                                                <HoverCard.Dropdown>
                                                    <Group>
                                                        <Avatar src={elem.profileImg} radius="x4 " />
                                                        <Stack spacing={5}>


                                                            <Anchor
                                                                Link To="https://twitter.com/mantinedev"
                                                                color="dimmed"
                                                                size="xs"
                                                                sx={{ lineHeight: 1 }}
                                                            >
                                                                <a href={`/profile/${elem._id}`}> {elem.username}</a>
                                                            </Anchor>

                                                            <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                                                                {elem.bio}
                                                            </Text>
                                                        </Stack>
                                                    </Group>

                                                    <Text size="sm" mt="md">

                                                    </Text>

                                                    <Group mt="md" spacing="xl">
                                                        <Link>
                                                            <div className="container">
                                                                <Button onClick={() => handleFollow(elem)} variant="dark">
                                                                    Follow
                                                                </Button>
                                                            </div>
                                                        </Link>
                                                    </Group>
                                                </HoverCard.Dropdown>
                                            </HoverCard>
                                        </Group>



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

                                    <PostsList posts={myPostsData}  ></PostsList>
                                    {/* {myPostsData.map(elem => {
                                        return (<div>
                                            <h3>{elem.owner.username}</h3>
                                        </div>)
                                    })} */}
                                </Tab>
                                <Tab eventKey="My Favs" title="My Favs">
                                    <Col>
                                        <h3>My Favs</h3>
                                        <PostsList posts={userData.favPosts}></PostsList>
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


