import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import uploadServices from "../../services/upload.service"
// import ErrorMessage from "../ErrorMessage/ErrorMessage"

// import { MessageContext } from './../../contexts/userMessage.context'


const SignupForm = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        bio: '',
        profileImg: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const navigate = useNavigate()


    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUserData({ ...userData, profileImg: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {


        e.preventDefault()

        authService
            .signup(userData)
            .then(() => {
                navigate('/feed')
            })
            .catch(err => console.log(err))
    }

    const { username, password, email, bio, profileImg } = userData

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
                <Form.Label>Profile Image (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>




            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loanding ...' : 'Submit'}</Button>
            </div>

        </Form>
    )
}

export default SignupForm