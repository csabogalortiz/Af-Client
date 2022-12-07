import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import postService from "./../../services/post.service"
import uploadServices from "../../services/upload.service"
import './NewPostForm.css'
import React from 'react';
import { AuthContext } from '../../contexts/auth.context';



const NewPostForm = ({ fireFinalActions }) => {


    const [postsData, setPotsData] = useState({
        title: '',
        content: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setPotsData({ ...postsData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        postService
            .newPost(postsData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.error(err))
    }

    const { title, content } = postsData

    const { user, logoutUser } = useContext(AuthContext)

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="content">
                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Interpreta el sentimiento del dia" rows={5} name="content" className="inputPost" value={content} />
            </Form.Group>
            <Form.Group className="mb-5" controlId="inv">
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            {/* <Form.Group className="file-input">
                        <label >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" />
                                </svg>
                                <input id="file-input" type="file" />
                                </label>
                            </Form.Group> */}
            <div className="">
                <Button variant="dark" type="submit">Share Art</Button>
            </div>
        </Form>


    );
}





export default NewPostForm