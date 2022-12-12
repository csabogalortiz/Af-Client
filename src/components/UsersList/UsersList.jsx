import { Col, Row } from "react-bootstrap"
import UserCard from "../UserCard/UserCard"

const UsersList = ({ users, setRefresh }) => {

    return (
        <Row>
            {users.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <UserCard {...elm} setRefresh={setRefresh} />
                    </Col>
                )
            })}
        </Row>

    )
}

export default UsersList