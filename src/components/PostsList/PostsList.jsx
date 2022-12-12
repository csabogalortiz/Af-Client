import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from "react"
import { useState, useEffect } from "react"
import UserService from "./../../services/user.service"


const PostsList = ({ posts, setRefresh }) => {

    const { user } = useContext(AuthContext)

    const [favPost, setFavPost] = useState([])



    useEffect(() => {
        UserService
            .getUser(user._id)
            .then((response) => {
                const favPostIDs = response.data.favPosts.map(post => post._id)
                setFavPost(favPostIDs)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col xs={12} key={elm._id} >
                        <PostCard {...elm} favPost={favPost} setRefresh={setRefresh} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostsList