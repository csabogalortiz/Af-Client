import './PostCard.css'
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import DisplayCanvas from '../Canvas/DisplayCanvas';
import YoutubeEmbed from '../Video/Video';


const PostCard = (props) => {
    const { title, owner, content, postImg, canvas, videoId } = props;
    let splitId = null


    const { user } = useContext(AuthContext)

    if (videoId) {
        let idVideo = videoId?.split('=')
        splitId = idVideo[1]


    }






    return (
        <Card className="mb-4 PostCard">

            <Card.Body>

                <Card.Title>{props?.owner?.username}</Card.Title>
                <div>
                    <img src={props?.owner?.profileImg}></img>
                </div>
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
                                        <Button variant="dark" size="sm">Ver detalles</Button>
                                    </Link>
                                </ButtonGroup>
                            </div>

                        </>

                }


            </Card.Body>
        </Card>
    );
}


export default PostCard