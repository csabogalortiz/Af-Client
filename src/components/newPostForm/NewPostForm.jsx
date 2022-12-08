import { useState, useContext } from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, Button, Row, Col } from "react-bootstrap"
import postService from "./../../services/post.service"
import uploadServices from "../../services/upload.service"
import './NewPostForm.css'
import React from 'react';
import { AuthContext } from '../../contexts/auth.context';
import DrawingCanvas from './../../components/Canvas/DrawingCanvas'


const NewPostForm = ({ fireFinalActions }) => {


    // console.log('aqui esta los datos del canvas!!!', draw)

    const [postData, setPotsData] = useState({
        title: '',
        content: '',
        postImg: '',
        canvas: '',
    })

    const saveCanvasData = (data) => {
        const newPostData = {}

        newPostData.title = postData.title;
        newPostData.content = postData.content;
        newPostData.postImg = postData.postImg;
        newPostData.canvas = data;


        setPotsData(newPostData)

        // setPotsData({ ...postData, canvas: data })
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setPotsData({ ...postData, [name]: value })
    }

    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPotsData({ ...postData, postImg: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        console.log({ postData })
        postService
            .newPost(postData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.error(err))
    }

    const { title, content, postImg } = postData

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

            <Form.Group className="mb-5" controlId="tabs">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title="Home">

                        <Form.Group className="mb-3" controlId="postImg">
                            <Form.Label>Post Image (URL)</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>

                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <DrawingCanvas saveCanvasData={saveCanvasData} />
                    </Tab>
                    <Tab eventKey="longer-tab" title="Loooonger Tab">
                        <h1>hola</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        <h1>hola</h1>
                    </Tab>
                </Tabs>
            </Form.Group>

            <div className="">
                <Button variant="dark" type="submit">Share Art</Button>
            </div>
        </Form>


    );
}





export default NewPostForm