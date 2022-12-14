import "./UserCard.css"
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { useContext, useEffect, useState } from 'react';
import UserService from '../../services/user.service'

const UserCard = (props) => {

    const navigate = useNavigate()

    const { username, profileImg, bio, _id, followers, setRefresh } = props;


    const { user } = useContext(AuthContext)

    const [isFollower, setisFollower] = useState(false)

    useEffect(() => {
        setisFollower(followers.includes(user._id))
    }, [])

    const handleFollow = () => {
        setisFollower(true)
        UserService
            .followers(_id)
            .then((response) => setRefresh(response))
            .catch(err => console.log(err))
    }

    const handleUnFollow = () => {
        setisFollower(false)
        UserService
            .unfollow(_id)
            .then((response) => setRefresh(response))
            .catch(err => console.log(err))
    }

    return (

        <Card className="mb-4 UserCard">
            <Card.Body>
                <div>
                    <img src={profileImg}></img>
                    <p>{bio}</p>
                </div>
                <Link to={`/profile/${_id}`} activeclassname="activeClicked">
                    <Card.Title>{username}</Card.Title>
                </Link>
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

            </Card.Body>
        </Card>

    )
}

export default UserCard