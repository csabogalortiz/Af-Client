import './PostCard.css'
import { Button, Container, Modal, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import DisplayCanvas from '../Canvas/DisplayCanvas';
import YoutubeEmbed from '../Video/Video';
import NewCommentForm from './../NewCommentForm/NewCommentForm'
import UserService from '../../services/user.service';
import postService from '../../services/post.service';

const PostCard = ({ title, owner, content, postImg, canvas, videoId, _id, favPost, setRefresh, setRefreshUser, sharedPosts, mediaType }) => {

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    let splitId = null

    const [isFav, setIsFav] = useState(favPost.includes(_id))

    const [isShared, setIsShared] = useState(sharedPosts.includes(_id))

    const { user } = useContext(AuthContext)

    if (videoId) {
        let idVideo = videoId?.split('=')
        splitId = idVideo[1]
    }

    const handleDelete = () => {
        postService
            .delete(_id)
            .then((response) => {
                setRefreshUser(response)
            })
            .catch(err => console.log(err))

    }

    const handleFav = () => {

        UserService
            .favPost(_id)
            .then((response) => {
                setRefreshUser(response)
            })
            .catch(err => console.log(err))

    }

    const handleUnLike = () => {

        UserService
            .unlikePost(_id)
            .then((response) => {
                setRefreshUser(response)
            })

            .catch(err => console.log(err))
    }

    const handleShare = () => {

        UserService
            .sharedPosts(_id)
            .then((response) => {
                setRefreshUser(response)
            })
            .catch(err => console.log(err))
    }

    const handleUnShare = () => {

        UserService
            .unSharePost(_id)
            .then((response) => {
                setRefreshUser(response)
            })
            .catch(err => console.log(err))
    }

    return (

        <Card className="mb-4 PostCard">

            <Card.Body>
                <Container>
                    <Link to={`/profile/${owner?._id}`} activeclassname="activeClicked">
                        <Card.Title>{owner?.username}</Card.Title>
                        <div>
                            <img src={owner?.profileImg}></img>
                        </div>
                    </Link>
                    <h2>{title}</h2>
                    <h4>{content}</h4>
                    <p>{mediaType} </p>
                    {mediaType === 'IMG' &&
                        <div>
                            <img src={postImg}></img>
                        </div>
                    }
                    {mediaType === 'CANVAS' &&
                        <div>
                            {canvas && <DisplayCanvas canvasData={canvas} />}
                        </div>
                    }
                    {
                        videoId &&
                        <div className="App">
                            <h1>Youtube Embed</h1>
                            <YoutubeEmbed embedId={splitId} />
                        </div>
                    }
                    <Link to={`/posts/${_id}/details`}>
                        <div className="d-grid mb-5">
                            <Button variant="dark" size="sm">Details</Button>
                        </div>
                    </Link>
                    {user && <Button onClick={openModal} variant="dark" size="sm">💬</Button>}

                </Container>

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewCommentForm fireFinalActions={fireFinalActions} postId={_id} />
                    </Modal.Body>
                </Modal>

                <Button onClick={handleDelete} size="sm" variant="dark">
                    Delete
                </Button>

                <Col>
                    <div className="d-grid mb-5">
                        {
                            !favPost.includes(_id)
                                ?
                                <Button onClick={handleFav} size="sm" variant="dark">
                                    ♡
                                </Button>
                                :
                                <Button onClick={handleUnLike} size="sm" variant="dark">
                                    ♥
                                </Button>
                        }
                    </div>
                </Col>

                <Col>
                    <div className="d-grid mb-5">
                        {
                            !sharedPosts.includes(_id)
                                ?
                                <Button onClick={handleShare} size="sm" variant="primary">
                                    ⬛
                                </Button>
                                :
                                <Button onClick={handleUnShare} size="sm" variant="primary">
                                    ⬜
                                </Button>
                        }
                    </div>
                </Col>

            </Card.Body>
        </Card >
    );
}

export default PostCard