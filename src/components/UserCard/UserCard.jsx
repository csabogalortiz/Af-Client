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

    const { username, profileImg, bio, _id, followers } = props;


    const [isFollower, setisFollower] = useState(followers.includes(_id))


    const handleFollow = (e) => {
        setisFollower(true)
        UserService
            .followers(_id)
            .then(() => { })
            .catch(err => console.log(err))
    }

    const handleUnFollow = (e) => {
        setisFollower(false)
        UserService
            .unfollow(_id)
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

                {
                    !isFollower ?
                        <Button onClick={handleFollow} size="sm" variant="dark">
                            Follow
                        </Button>
                        :
                        <Button onClick={handleUnFollow} size="sm" variant="dark">
                            Unfollow
                        </Button>

                }


                {/* <Link>
                    <div className="d-grid mb-5">
                        {/* {user && <Button onClick={openModal} variant="dark" size="sm">Follow</Button>} */}
                {/* <Button onClick={handleFollow} variant="dark">
                            Follow
                        </Button>
                    </div>
                </Link>  */}

            </Card.Body>
        </Card>
    )
}

export default UserCard