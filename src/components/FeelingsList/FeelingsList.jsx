import { Col, Row } from "react-bootstrap"
import FeelingCard from "../FeelingCard/FeelingCard"

const FeelingsList = ({ posts }) => {

    return (
        <Row>
            {posts.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <FeelingCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default FeelingsList