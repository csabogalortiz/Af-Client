import { Col, Row } from "react-bootstrap"
import PostCard from "../PostCard/PostCard"


const PostsList = ({ posts }) => {

    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <PostCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PostsList