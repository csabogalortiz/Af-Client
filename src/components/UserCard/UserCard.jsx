import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import UserService from '../../services/user.service'
import "./UserCard.css"
import { useNavigate } from 'react-router-dom'

const UserCard = (props) => {

    const navigate = useNavigate()

    const { username, profileImg, bio, _id, followers, setRefresh } = props;
    console.log('que eres tu??? ', followers)

    const { user } = useContext(AuthContext)

    const [isFollower, setisFollower] = useState(false)

    console.log('somos amiguis????', isFollower)

    useEffect(() => {
        setisFollower(followers.includes(user._id))
    }, [])


    const handleFollow = (e) => {
        setisFollower(true)
        UserService
            .followers(_id)
            .then((response) => setRefresh(response))
            .catch(err => console.log(err))
    }

    const handleUnFollow = (e) => {
        setisFollower(false)
        UserService
            .unfollow(_id)
            .then((response) => setRefresh(response))
            .catch(err => console.log(err))
    }

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