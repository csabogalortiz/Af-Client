import { Container, Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import postService from "./../../services/post.service"
import DisplayCanvas from '../../components/Canvas/DisplayCanvas'
import YoutubeEmbed from "../../components/Video/Video"


const PostDetails = (props) => {

    const { title, owner, content, postImg, canvas, videoId, _id, comments, description } = props;

    const [post, setPost] = useState()
    const { post_id } = useParams()

    useEffect(() => {
        postService
            .details(post_id)
            .then(({ data }) => setPost(data))
            .catch(err => console.error(err))
    }, [])

    return (


        <Container>

            <Link to="/feed">
                <Button as="div" variant="dark">Back</Button>
            </Link>

            {
                !post
                    ?
                    <h1>Loading</h1>
                    :
                    <>
                        <h1 className="mb-4">{post.title} Details </h1>
                        <hr />

                        <Row>
                            <Col>
                                <h3>Content</h3>
                                <p>{post.content}</p>
                                <hr />
                            </Col>

                            <Col>
                                <h3>Comments</h3>
                                {post.comments.map(elem => {
                                    return <div>
                                        <img src={elem.owner.profileImg} style={{ width: '100%' }} />
                                        <h3>{elem.owner.username}</h3>
                                        <p>{elem.description}</p>
                                    </div>
                                })}
                                <hr />
                            </Col>

                            <Col>
                                <img src={post.postImg} style={{ width: '100%' }} />
                            </Col>

                            <Col>
                                {post.canvas && <DisplayCanvas canvasData={post.canvas} />}
                            </Col>

                            <Col>
                                {
                                    post.videoId &&
                                    <div className="App">
                                        <h1>Youtube Embed</h1>
                                        <YoutubeEmbed embedId={post.splitId} />
                                    </div>
                                }
                            </Col>


                        </Row>
                    </>
            }


        </Container>
    )
}

export default PostDetails