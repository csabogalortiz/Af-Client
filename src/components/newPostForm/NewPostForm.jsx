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
import FeelingsList from "../FeelingsList/FeelingsList";


const NewPostForm = (props) => {

    const { fireFinalActions, feeling } = props


    const [postData, setPotsData] = useState({
        title: '',
        content: '',
        postImg: '',
        canvas: '',
        videoId: '',
        feeling: feeling._id
    })

    const saveCanvasData = (data) => {

        setPotsData({ ...postData, canvas: data })
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
        console.log(postData)
        postService
            .newPost(postData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.error(err))
    }

    const { title, content, postImg, videoId } = postData

    const { user, logoutUser } = useContext(AuthContext)

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>{feeling?.title}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-5" controlId="content">
                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Interpreta el sentimiento del dia" rows={5} name="content" className="inputPost" value={content} />
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
                    <Tab eventKey="longer-tab" title="Music">
                        <Form.Group className="mb-5" controlId="videoId">
                            <Form.Control as="textarea" onChange={handleInputChange} placeholder="Paste your Youtube URL" rows={5} name="videoId" className="inputPost" value={videoId} />
                        </Form.Group>
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