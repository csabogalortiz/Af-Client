import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import UserService from '../../services/user.service'
import "./UserCard.css"
import { useNavigate } from 'react-router-dom'

const UserCard = (props) => {

    const navigate = useNavigate()

    const { username, profileImg, bio, _id } = props;

    const handleFollow = (e) => {

        UserService
            .followers(_id)
            .then(() => { })
            .catch(err => console.log(err))
    }

    const { user } = useContext(AuthContext)

    return (

        <Card className="mb-4 UserCard">
            <Card.Body>
                <Link to={`/profile/${_id}`} activeclassname="activeClicked">
                    <Card.Title>{username}</Card.Title>
                </Link>
                <div>
                    <img src={profileImg}></img>
                    <p>{bio}</p>
                </div>

                <Link>
                    <div className="d-grid mb-5">
                        {/* {user && <Button onClick={openModal} variant="dark" size="sm">Follow</Button>} */}
                        <Button onClick={handleFollow} variant="dark">
                            Follow
                        </Button>
                    </div>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default UserCard