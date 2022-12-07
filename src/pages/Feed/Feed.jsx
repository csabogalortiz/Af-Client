import './Feed.css'
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import PostsList from "../../components/PostsList/PostsList"
import PostService from "../../services/post.service"
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import NewPostForm from './../../components/newPostForm/NewPostForm'
import Loader from './../../components/Loader/Loader'

const Feed = () => {

    const [posts, setPosts] = useState()
    const { user } = useContext(AuthContext)

    const loadPosts = () => {
        PostService
            .getPosts()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }


    const fireFinalActions = () => {
        loadPosts()
    }

    useEffect(() => {
        loadPosts()
    }, [])



    return (
        <Container className="Feed">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <h1>FEED!!</h1>
                    {/* <PostsList posts={posts} /> */}
                    {/* {!posts ? <Loader /> : <PostsList posts={posts} />} */}
                    <NewPostForm></NewPostForm>
                </Col>

            </Row>

        </Container>
    )
}

export default Feed