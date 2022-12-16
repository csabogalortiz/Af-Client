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
import { MdFavorite, MdFavoriteBorder, MdOutlineModeComment, MdOutlineShare, MdShare, MdOutlineMoreHoriz } from "react-icons/md";


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

                <Row className="animate__fadeInDown">
                    <RandomFeeling {...feeling} />
                </Row>
                <Row>
                    <Col>

                        <Link className='d-flex justify-content-center' onClick={openModal} style={{ textDecoration: 'none' }}>
                            <div className='CreatePost d-flex justify-content-around align-items-center px-3 gap-3' >
                                <div className='colInPost'>
                                    <img src={user.profileImg} class='createPostImg' ></img>
                                </div>
                                <div className="createPostUser">
                                    <p className='m-0'>How would you express this feeling?</p>
                                </div>
                                <div className='actionButtons actionButton d-flex justify-content-around align-items-center pt-2 px-3 gap-3'>
                                    <div className="actionButton love d-grid mb-5">
                                        <MdFavorite size="sm" color="FE53BB" />


                                    </div>

                                </div>

                            </div>
                            <hr>
                            </hr>
                        </Link>
                        {!posts ? <Loader /> : <PostsList posts={posts} setRefresh={setRefresh} />}

                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={closeModal}>

                <Modal.Body className="Modal">
                    <NewPostForm fireFinalActions={fireFinalActions} feeling={feeling} setRefresh={setRefresh} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Feed