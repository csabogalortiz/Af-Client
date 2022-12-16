import { useEffect } from "react"
import { Container, Row, Col, Button, Tab, Tabs, Modal } from "react-bootstrap"
import { useState, useContext } from "react"
import { Link, } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import PostsList from "../../components/PostsList/PostsList"
import PostService from "../../services/post.service"
import EditProfileForm from "../../components/SingupForm/EditProfileForm"
import { MdFavorite, MdFavoriteBorder, MdOutlineModeComment, MdOutlineStarPurple500, MdShare, MdOutlineMoreHoriz } from "react-icons/md";
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

import './Profile.css'

const UsersDetails = ({ isOwner }) => {

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    const [userData, setUserData] = useState()
    const [myPostsData, setmyPostsData] = useState([])

    const { user } = useContext(AuthContext)
    console.log('soy user del token', user)
    const params = useParams()
    let currentUser

    useEffect(() => {

        currentUser = isOwner ? user._id : params.user_id

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
        userservice
            .followers(elem._id)
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <div className="coverImg">
                <img className="coverImg" src={userData?.coverImg}></img>
            </div>
            <div>
                <img className="profileImg" src={userData?.profileImg}></img>
            </div>


            {

                !userData
                    ?
                    <h1>Loading...</h1>
                    :
                    <>

                        {
                            isOwner
                                ?
                                <h1 className="profileUsername">{userData.username}</h1>
                                :
                                <h1 className="mb-4 profileUsername"> {userData.username}</h1>
                        }

                        <div className="profileBio">
                            <p2> {userData.bio} </p2>
                        </div>


                        <div className='d-flex justify-content-center followers mb-5' >
                            <h3>Following</h3>

                            {userData.followers.map(elem => {
                                return (<div>
                                    <Group className="followers_bubbles" position="center ">
                                        <HoverCard width={230} shadow="md" withArrow openDelay={200} closeDelay={400}>
                                            <HoverCard.Target>
                                                <Avatar src={elem.profileImg} radius="x4 " />
                                            </HoverCard.Target>
                                            <HoverCard.Dropdown>
                                                <Group>
                                                    <Avatar src={elem.profileImg} radius="x4 " />
                                                    <Stack spacing={5}>

                                                        <Anchor
                                                        >
                                                            <a href={`/profile/${elem._id}`}> {elem.username}</a>
                                                        </Anchor>

                                                        <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                                                            {elem.bio}
                                                        </Text>
                                                    </Stack>
                                                </Group>

                                                <Text size="sm" mt="md"></Text>

                                                <Group mt="md" spacing="xl">
                                                    <Link>
                                                        <div className="container">
                                                            <Button onClick={() => handleFollow(elem)} variant="dark">Follow</Button>
                                                        </div>
                                                    </Link>
                                                </Group>
                                            </HoverCard.Dropdown>
                                        </HoverCard>
                                    </Group>
                                </div>)
                            })}
                        </div>

                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 distribution"
                            variant="pills"
                            fill
                            justify
                            mt-4
                        >
                            <Tab tabClassName='profileTabs' eventKey="My posts" title={<MdOutlineStarPurple500 size={'2em'} />} >
                                <PostsList posts={myPostsData} ></PostsList>
                            </Tab>

                            <Tab tabClassName='profileTabs' eventKey="Compartidos" title={<MdShare size={'2em'} />} >
                                <h3>Shared</h3>
                                <PostsList posts={userData.sharedPosts}></PostsList>
                            </Tab>
                            {
                                isOwner &&
                                <Tab tabClassName='profileTabs' eventKey="My Favs" title={<MdFavorite size={'2em'} />}>

                                    <h3>My Favs</h3>
                                    <PostsList posts={userData.favPosts}></PostsList>
                                </Tab>
                            }
                        </Tabs>

                    </>


            }

            {user && <Button onClick={openModal} variant="dark" size="sm">Edit Profile</Button>}



            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm fireFinalActions={fireFinalActions} user={user} />
                </Modal.Body>
            </Modal>
        </Container >
    )
}

export default UsersDetails


