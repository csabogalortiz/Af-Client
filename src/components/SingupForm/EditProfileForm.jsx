import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import uploadServices from "../../services/upload.service"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import UserService from "../../services/user.service"

const EditProfileForm = ({ user, fireFinalActions }) => {

    const { username, email, bio, profileImg, coverImg } = user

    const [updateUser, setUpdateUser] = useState({
        username: username,
        email: email,
        bio: bio,
        profileImg: profileImg,
        coverImg: coverImg
    })
    const [errors, setErrors] = useState([])
    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUpdateUser({ ...updateUser, [name]: value })
    }

    const navigate = useNavigate()


    const handleFileUpload = e => {
        setLoadingImage(true)

        console.log(e.target.name)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])


        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUpdateUser({ ...updateUser, [e.target.name]: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        UserService
            .edit(user._id, updateUser)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (

        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={updateUser.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" value={updateUser.bio} onChange={handleInputChange} name="bio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="profileImg">
                <Form.Label>Profile Image (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} name={'profileImg'} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="coverImg">
                <Form.Label>Add a Cover Photo!</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} name={'coverImg'} />
            </Form.Group>

            {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}


            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loanding ...' : 'Edit'}</Button>
            </div>

        </Form>
    )
}

export default EditProfileForm