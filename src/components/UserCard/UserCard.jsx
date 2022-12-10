import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import "./UserCard.css"

const UserCard = (props) => {

    const { username, profileImg, bio, _id } = props;
    // {`/profile/${owner._id}`}

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
                        <Button variant="dark" size="sm">Follow</Button>
                    </div>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default UserCard