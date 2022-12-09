import './Feed.css'
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import PostsList from "../../components/PostsList/PostsList"
import PostService from "../../services/post.service"
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import NewPostForm from './../../components/newPostForm/NewPostForm'
import Loader from './../../components/Loader/Loader'
import Canvas2 from './../../components/Canvas/Canvas2'
import YoutubeEmbed from "./../../components/Video/Video";
import NewCommentForm from './../../components/NewCommentForm/NewCommentForm'


const Feed = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const [posts, setPosts] = useState()
    const { user } = useContext(AuthContext)

    const loadPosts = () => {
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
    }, [])

    return (
        <>
            <Container lassName="Feed">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        {user && <Button onClick={openModal} variant="dark" size="sm">Crear nueva</Button>}
                        <hr />
                        <h1>FEED!!</h1>
                        {/* <PostsList posts={posts} /> */}
                        {!posts ? <Loader /> : <PostsList posts={posts} />}
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPostForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
            {/* 
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCommentForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal> */}




        </>
    )
}

export default Feed