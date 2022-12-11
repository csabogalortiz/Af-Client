import './PostCard.css'
import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import DisplayCanvas from '../Canvas/DisplayCanvas';
import YoutubeEmbed from '../Video/Video';
import NewCommentForm from './../NewCommentForm/NewCommentForm'
import UserService from '../../services/user.service';
// import FavPostsButton from './../FavPostsButton/FavPostsButton'


const PostCard = (props) => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }
    const { title, owner, content, postImg, canvas, videoId, _id, favPost } = props;
    let splitId = null

    const [isFav, setIsFav] = useState(favPost.includes(_id))

    console.log({ title, isFav })

    const { user } = useContext(AuthContext)

    if (videoId) {
        let idVideo = videoId?.split('=')
        splitId = idVideo[1]
    }


    const handleFav = (e) => {
        setIsFav(true)
        UserService
            .favPost(_id)
            .then(() => { })
            .catch(err => console.log(err))

    }

    const handleUnLike = (e) => {
        setIsFav(false)
        UserService
            .unlikePost(_id)
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (

        <Card className="mb-4 PostCard">

            <Card.Body>
                <Container>
                    <Link to={`/profile/${owner._id}`} activeclassname="activeClicked">

                        <Card.Title>{props?.owner?.username}</Card.Title>

                        <div>
                            <img src={props?.owner?.profileImg}></img>

                        </div>
                    </Link>
                    <h2>{title}</h2>
                    <h4>{content}</h4>

                    <div>
                        <img src={postImg}></img>
                    </div>

                    {canvas && <DisplayCanvas canvasData={canvas} />}
                    {
                        videoId &&
                        <div className="App">
                            <h1>Youtube Embed</h1>
                            <YoutubeEmbed embedId={splitId} />
                        </div>
                    }

                    {/* <FavPostsButton></FavPostsButton> */}
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

                <Link>
                    <div className="d-grid mb-5">
                        {/* {user && <Button onClick={openModal} variant="dark" size="sm">Follow</Button>} */}
                        {
                            !isFav ?
                                <Button onClick={handleFav} size="sm" variant="dark">
                                    ♡
                                </Button>
                                :
                                <Button onClick={handleUnLike} size="sm" variant="dark">
                                    ♥
                                </Button>

                        }
                    </div>
                </Link>





            </Card.Body>
        </Card >
    );
}


export default PostCard