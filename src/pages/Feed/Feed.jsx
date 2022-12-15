import './Feed.css'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import PostsList from "../../components/PostsList/PostsList"
import PostService from "../../services/post.service"
import NewPostForm from './../../components/newPostForm/NewPostForm'
import Loader from './../../components/Loader/Loader'
import RandomFeeling from '../../components/RandomFeelingCard/RandomFeelingCard'
import feelingService from '../../services/feeling.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'

const Feed = () => {

    const [feeling, setFeeling] = useState({})


    const loadRandomFeeling = () => {
        feelingService
            .getRandomFeeling()
            .then(({ data }) => setFeeling(data))
            .catch(err => console.log(err))
    }

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const [refresh, setRefresh] = useState(null)
    const [posts, setPosts] = useState()
    const { user } = useContext(AuthContext)

    const loadPosts = () => {
        setPosts()
        PostService
            .getPosts()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadPosts()
        closeModal()
    }

    useEffect(() => {
        loadPosts()
        loadRandomFeeling()
    }, [refresh])

    return (
        <>

            <Container className="Feed animate__animated animate__fadeIn">

                <Row>
                    <RandomFeeling {...feeling} />
                </Row>
                <Row>
                    <Col>
                        <Link onClick={openModal} style={{ textDecoration: 'none' }}>
                            <div className='CreatePost d-flex justify-content-around align-items-center px-3 gap-3' >
                                <div className='colInPost'>
                                    <img src={user.profileImg} class='createPostImg' ></img>
                                </div>
                                <div className="createPostUser">
                                    <p className='m-0'>How would you express this feeling artistically?</p>
                                </div>
                                {/* <Col>
                                    <div className='CreatePost'>
                                        {user && <Button onClick={openModal} ></Button>}
                                    </div>
                                </Col> */}
                            </div>
                        </Link>
                        {!posts ? <Loader /> : <PostsList posts={posts} setRefresh={setRefresh} />}

                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPostForm fireFinalActions={fireFinalActions} feeling={feeling} setRefresh={setRefresh} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Feed