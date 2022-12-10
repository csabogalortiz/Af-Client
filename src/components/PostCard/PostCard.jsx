import './PostCard.css'
import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import DisplayCanvas from '../Canvas/DisplayCanvas';
import YoutubeEmbed from '../Video/Video';
import NewCommentForm from './../NewCommentForm/NewCommentForm'


const PostCard = (props) => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }
    const { title, owner, content, postImg, canvas, videoId, _id } = props;
    let splitId = null


    const { user } = useContext(AuthContext)

    if (videoId) {
        let idVideo = videoId?.split('=')
        splitId = idVideo[1]


    }
    {/* <NavLink to="/profile/${_id} */ }
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
                    <Link to={`/posts/${_id}/details`}>
                        <div className="d-grid mb-5">
                            <Button variant="dark" size="sm">Details</Button>
                        </div>
                    </Link>
                    <Link>
                        <div className="d-grid mb-5">
                            <Button variant="dark" size="sm">♥</Button>
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


                {/* 
                {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Link>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm">Ver detalles</Button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">
                                    <Link>
                                        <Button variant="dark" size="sm">(ɔ◔‿◔)ɔ ♥</Button>
                                    </Link>
                                </ButtonGroup>
                            </div>

                        </>

                } */}


            </Card.Body>
        </Card >
    );
}


export default PostCard