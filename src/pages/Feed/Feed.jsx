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
            <Container className="Feed">
                <Row>
                    <RandomFeeling {...feeling} />
                </Row>

                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        {user && <Button onClick={openModal} variant="dark" size="sm">Crear nueva</Button>}
                        <hr />
                        <h1>FEED!!</h1>

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