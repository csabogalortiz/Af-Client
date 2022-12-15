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
import 'animate.css'
import { MdFavorite, MdFavoriteBorder, MdOutlineModeComment, MdOutlineShare, MdShare, MdOutlineMoreHoriz } from "react-icons/md";


const PostCard = (props) => {
    console.log({ props })
    const { title, owner, content, postImg, canvas, videoId, _id, favPost, feeling, setRefresh, setRefreshUser, sharedPosts, mediaType } = props
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

        <Card className="mb-4 postsCards rounded" >
            <div style={{ width: "100%" }} className='p-0 m-0'>
                {mediaType === 'IMG' &&
                    <div>
                        <img className="postImage" src={postImg}></img>
                    </div>
                }
                {mediaType === 'CANVAS' &&
                    <div className='backgroundForImg' >
                        {canvas && <DisplayCanvas canvasData={canvas} />}
                    </div>
                }

                {
                    videoId &&
                    <div className="App">
                        <YoutubeEmbed style={{ width: "100%" }} embedId={splitId} />
                    </div>
                }
            </div>
            <Card.Body>
                <div>
                    <Link className='d-flex justify-content-around align-items-center px-3 gap-3' to={`/profile/${owner?._id}`} activeclassname="activeClicked" style={{ textDecoration: 'none' }}>
                        <div className='p-0 m-0 imgOfPost'>
                            <img className="imgOfPost" src={owner?.profileImg}></img>
                        </div>
                        <Card.Title className="cardText" style={{ textDecoration: 'none' }}>{owner?.username}</Card.Title>
                    </Link>
                </div>
                <hr>
                </hr>
                <Card.Text className='cardText'>
                    <p>{feeling?.title}</p>
                    {/* <h4>{feeling}</h4> */}
                    <p>{content}</p>
                </Card.Text>

                <hr>
                </hr>

                <div className='actionButtons d-flex justify-content-around align-items-center pt-2 px-3 gap-3'>
                    <div className="actionButton comment d-grid mb-5">
                        {user && <MdOutlineModeComment onClick={openModal} variant="dark" size="lg" />}

                        {/* 
                    <Button onClick={handleDelete} size="sm" variant="dark">
                    Delete
                </Button> */}
                    </div>

                    <div className="actionButton love d-grid mb-5">
                        {
                            !favPost.includes(_id)
                                ?
                                <MdFavoriteBorder onClick={handleFav} size="sm" />
                                :
                                <MdFavorite onClick={handleUnLike} size="sm" color="FE53BB" />

                        }
                    </div>

                    <div className="actionButton share d-grid mb-5">
                        {
                            !sharedPosts.includes(_id)
                                ?
                                <MdOutlineShare MdShare onClick={handleShare} size="sm" />
                                :
                                <MdShare onClick={handleUnShare} size="sm" color="00FFD4" />

                        }
                    </div>
                    <Link className='actionButton' to={`/posts/${_id}/details`}>
                        <div className="d-grid mb-5">
                            <MdOutlineMoreHoriz variant="dark" size="sm" color="A166FF" />
                        </div>
                    </Link>
                </div>

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewCommentForm fireFinalActions={fireFinalActions} postId={_id} />
                    </Modal.Body>
                </Modal>

            </Card.Body>
        </Card >
    );
}



export default PostCard