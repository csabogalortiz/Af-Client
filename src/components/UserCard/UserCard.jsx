import "./UserCard.css"
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { useContext, useEffect, useState } from 'react';
import UserService from '../../services/user.service'

const cardStyles = ['CardColorZero', 'CardColorOne', 'CardColorTwo', 'CardColorThree', 'CardColorFour', 'CardColorFive']

const UserCard = (props) => {

    const navigate = useNavigate()

    const { index, username, profileImg, bio, _id, followers, setRefresh } = props;
    console.log('index', index)

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

        <Card className={`mb-4 position-absoute UserCard ${cardStyles[index]}`} style={{ minHeight: '400px' }}>
            <Card.Body>
                <div>
                    <div className='mb-2'>
                        <img src={profileImg}></img>
                    </div>
                    <Link className='mt-4 userCardText' style={{ textDecoration: 'none' }} to={`/profile/${_id}`} activeclassname="activeClicked">
                        <h2>{username}</h2>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <div className='mt-4'>
                        <p>{bio}</p>
                    </div>
                    {
                        !isFollower ?
                            <Button className="mb-5" onClick={handleFollow} size="lg" variant="dark">
                                Follow
                            </Button>
                            :
                            <Button className="mb-5" onClick={handleUnFollow} size="lg" variant="dark">
                                Unfollow
                            </Button>

                    }
                </div>

            </Card.Body>
        </Card>

    )
}

export default UserCard