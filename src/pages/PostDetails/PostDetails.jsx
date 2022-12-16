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
                        <Container className='detailsCard'>
                            <Row>
                                <Col xs={6} className="d-flex justify-content-around align-items-center ml-3 mb-2" >
                                    <div className="information">
                                        <div>
                                            <div className="detailsContent content mt-4">
                                                <h1 className="detailCaptionTitle"> CAPTION: </h1>
                                                <p> " {post.content} "</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div >
                                            <h5 className="d-flex md={{ span: 3, offset: 3 }} rf_Hero_Title_postDetails mt-4">  {post.feeling.title} </h5>
                                            <p className="d-flex md={{ span: 3, offset: 3 }} mt-4"> {post.feeling.content} </p>
                                        </div>
                                        <hr></hr>
                                        <div className="mt-5 d-flex justify-content-around align-items-center px-3 gap-3 ">
                                            <div>
                                                <img className="profileimg" src={post.owner.profileImg} />
                                            </div>
                                            <div className="userNameDetails">
                                                {post.owner.username}
                                            </div>
                                        </div>
                                    </div>


                                </Col>
                                <Col xs={6}>
                                    <div className="postDetails mt-5">
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
                                return <div className="d-flex justify-content-around align-items-center">
                                    <img className="img-owner" src={elem.owner.profileImg} style={{ width: '100%' }} />
                                    < h3 > {elem.owner.username}</h3>
                                    <p>{elem.description}</p>
                                    <hr />
                                </div>

                            })}


                        </Container>

                    </>
            }


        </div >


    )


}



export default PostDetails

