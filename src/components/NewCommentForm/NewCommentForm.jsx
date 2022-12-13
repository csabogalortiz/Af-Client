import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import commentService from '../../services/comment.service'

const NewCommentForm = ({ fireFinalActions, postId }) => {

    const [commentData, setCommentData] = useState({
        owner: '',
        description: '',

    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        commentService
            .newComment(commentData, postId)
            .then(() => {
                fireFinalActions()
                navigate('/feed')

            })
            .catch(err => console.log(err))
    }

    const { owner, description } = commentData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="description">

                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Post your comment" rows={5} name="description" className="inputPost" value={description} />
            </Form.Group>

            <div className="">
                <Button variant="dark" type="submit">Post your comment</Button>
            </div>
        </Form>
    )
}

export default NewCommentForm