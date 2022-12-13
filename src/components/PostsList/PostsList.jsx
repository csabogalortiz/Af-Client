import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from "react"
import { useState, useEffect } from "react"
import UserService from "./../../services/user.service"


const PostsList = ({ posts, setRefresh }) => {

    const { user } = useContext(AuthContext)

    const [favPost, setFavPost] = useState([])

    const [sharedPosts, setSharedPosts] = useState([])

    const [refreshUser, setRefreshUser] = useState([])



    useEffect(() => {

        UserService
            .getUser(user._id)
            .then((response) => {
                const favPostIDs = response.data.favPosts.map(post => {
                    return post._id
                })
                setFavPost(favPostIDs)
                const sharedPostIDs = response.data.sharedPosts.map(post => {
                    return post
                })
                setSharedPosts(sharedPostIDs)

            })
            .catch(err => console.log(err))
    }, [refreshUser])




    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col xs={12} key={elm._id} >
                        <PostCard {...elm} favPost={favPost} sharedPosts={sharedPosts} setRefresh={setRefresh} setRefreshUser={setRefreshUser} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostsList


