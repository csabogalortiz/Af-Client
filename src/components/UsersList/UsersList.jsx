import { Col, Row } from "react-bootstrap"
import UserCard from "../UserCard/UserCard"

const UsersList = ({ users, setRefresh }) => {

    return (
        <Row>
            {users.map((elm, index) => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <UserCard {...elm} index={index % 6} setRefresh={setRefresh} />
                    </Col>
                )
            })}
        </Row>

    )
}

export default UsersList