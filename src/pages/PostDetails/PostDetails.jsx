import { Container, Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import postService from "./../../services/post.service"
import DisplayCanvas from '../../components/Canvas/DisplayCanvas'
import YoutubeEmbed from "../../components/Video/Video"
import './PostDetails.css'



const PostDetails = () => {

    const [post, setPost] = useState()
    const { post_id } = useParams()

    useEffect(() => {
        postService
            .details(post_id)
            .then(({ data }) => setPost(data))
            .catch(err => console.error(err))
    }, [])
    return (

        <div style={{ width: '100%' }} >


            {
                !post
                    ?
                    <h1>Loading</h1>
                    :
                    <>
                        <Container>
                            <Row>
                                <Col xs={6}>
                                    <div className="  information">
                                        <div >


                                            <h5 className="rf_Hero_Title mt-4">  {post.feeling.title}  </h5>

                                            <p className="content mt-4"> {post.content}</p>
                                            <hr />

                                            <img className="profileimg " src={post.owner.profileImg} /> <span className=" d-flex justify-content-around align-items-center pt-2 px-3 gap-3 ">{post.owner.username} </span>

                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="profile-pic mt-5">



                                        <img src={post.postImg} style={{ width: '100%' }} />




                                        {post.canvas && <DisplayCanvas canvasData={post.canvas} />}

                                        {
                                            post.videoId &&
                                            <div className="App">
                                                <YoutubeEmbed embedId={post.splitId} />
                                            </div>
                                        }


                                    </div>
                                </Col>

                            </Row >
                            <h3 className='mt-5'>Comments</h3>
                            <hr />
                            {post.comments.map(elem => {
                                return <div>
                                    <img className="img-owner" src={elem.owner.profileImg} style={{ width: '100%' }} />
                                    <h3>{elem.owner.username}</h3>
                                    <p>{elem.description}</p>
                                </div>
                            })}

                        </Container>
                    </>
            }


        </div >


    )


}



export default PostDetails

