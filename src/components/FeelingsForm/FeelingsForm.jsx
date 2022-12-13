import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import feelingService from './../../services/feeling.service'


const NewFeelingForm = ({ fireFinalActions, FeelingId }) => {

    const [feelingData, setFeelingData] = useState({
        owner: '',
        description: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setFeelingData({ ...feelingData, [name]: value })
    }
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        feelingService
            .newFeeling(feelingData, FeelingId)
            .then(() => {
                fireFinalActions()
                navigate('/Discover')
            })
            .catch(err => console.log(err))
    }

    const { title, content } = feelingData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="description">

                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Post your feeling" rows={5} name="content" className="inputPost" value={content} />
            </Form.Group>

            <div className="">
                <Button variant="dark" type="submit">Post your comment</Button>
            </div>
        </Form>
    )
}

export default NewFeelingForm