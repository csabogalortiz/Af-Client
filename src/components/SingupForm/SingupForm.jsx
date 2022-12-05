import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'

// import { MessageContext } from './../../contexts/userMessage.context'


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        bio: '',
        profileImg: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()
    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => {
                navigate('/feed')

            })
            .catch(err => console.log(err))
    }

    // navigate('/')



    const { username, password, email, bio, profileImg } = signupData

    return (

        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="profileImg">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="text" value={profileImg} onChange={handleInputChange} name="profileImg" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Submit</Button>
            </div>

        </Form>
    )
}

export default SignupForm