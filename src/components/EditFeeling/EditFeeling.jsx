import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import feelingService from './../../services/feeling.service'
import ErrorMessage from './../ErrorMessage/ErrorMessage'



const EditFeelingForm = ({ feeling, fireFinalActions }) => {
    const { title, content, language } = feeling
    const [updateFeeling, setupdateFeeling] = useState({
        title: title,
        content: content,
        language: language,

    })

    const [errors, setErrors] = useState([])


    const handleInputChange = e => {
        const { name, value } = e.target
        setupdateFeeling({ ...updateFeeling, [name]: value })
    }



    const handleSubmit = e => {
        e.preventDefault()

        feelingService
            .edit(feeling._id, updateFeeling)
            .then(() => {
                fireFinalActions()

            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={updateFeeling.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" value={updateFeeling.language} onChange={handleInputChange} name="language" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Post your feeling" rows={5} name="content" className="inputPost" value={updateFeeling.content} />
            </Form.Group>


            <div className="">
                <Button variant="outline-light rounded" type="submit">Edit feeling</Button>
            </div>
        </Form>
    )
}


export default EditFeelingForm