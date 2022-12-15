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

        <div className="container-fluid">

            <Link to="/feed">
                <Button as="div" variant="dark">Back</Button>
            </Link>

            {
                !post
                    ?
                    <h1>Loading</h1>
                    :
                    <>

                        <div className="profile-pic">


                            <img src={post.postImg} style={{ width: '100%' }} />




                            {post.canvas && <DisplayCanvas canvasData={post.canvas} />}

                            {
                                post.videoId &&
                                <div className="App">
                                    <YoutubeEmbed embedId={post.splitId} />
                                </div>
                            }


                        </div>
                        <div className=" information">
                            <div >

                                <h1 >{post.title} Details </h1>
                                <hr />


                                <h3>Content</h3>
                                <p>{post.content}</p>
                                <hr />

                                <h3>Comments</h3>
                                {post.comments.map(elem => {
                                    return <div>
                                        <img src={elem.owner.profileImg} style={{ width: '100%' }} />
                                        <h3>{elem.owner.username}</h3>
                                        <p>{elem.description}</p>
                                    </div>
                                })}
                                <hr />



                            </div>
                        </div>




                    </>
            }


        </div >


    )


}



export default PostDetails

