import './NewPostForm.css'
import { React, useState, useContext } from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, Button } from "react-bootstrap"
import postService from "./../../services/post.service"
import uploadServices from "../../services/upload.service"
import { AuthContext } from '../../contexts/auth.context';
import DrawingCanvas from './../../components/Canvas/DrawingCanvas'
import ErrorMessage from './../ErrorMessage/ErrorMessage'



const NewPostForm = ({ fireFinalActions, feeling, setRefresh }) => {

    const [postData, setPotsData] = useState({
        title: '',
        content: '',
        postImg: '',
        canvas: '',
        videoId: '',
        feeling: feeling._id,
        mediaType: '',
    })

    const [canSend, setCanSend] = useState(true)

    const [errors, setErrors] = useState([])

    const saveCanvasData = (data) => {
        console.log('entro en saveCanvas')
        setCanSend(true)
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
        postService
            .newPost(postData)
            .then(() => {
                fireFinalActions()
                setRefresh(postData)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const { title, content, postImg, videoId } = postData

    const { user, logoutUser } = useContext(AuthContext)

    console.log('canSend-------------------', canSend)

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>{feeling?.title}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-5" controlId="content">
                <Form.Control as="textarea" onChange={handleInputChange} placeholder="Interpreta el sentimiento del dia" rows={5} name="content" className="inputPost" value={content} />
            </Form.Group>

            <Form.Select aria-label="Default select example " onChange={handleInputChange} name="mediaType">
                <option>Select media  </option>
                <option value="IMG">Picture</option>
                <option value="CANVAS">Draw</option>
                <option value="SONG">Music</option>
                <option value="TEXT">Text</option>
            </Form.Select>

            <Form.Group className="mb-5 mt-5" controlId="tabs">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="Share an Image" title="Share an Image">
                        <Form.Group className="mb-3" controlId="postImg">
                            <Form.Label>Post Image (URL)</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="Draw" title="Draw">
                        <DrawingCanvas saveCanvasData={saveCanvasData} canSend={canSend} setCanSend={setCanSend} setPotsData={setPotsData} />
                    </Tab>
                    <Tab eventKey="longer-tab" title="Music">
                        <Form.Group className="mb-5" controlId="videoId">
                            <Form.Control as="textarea" onChange={handleInputChange} placeholder="Paste your Youtube URL" rows={5} name="videoId" className="inputPost" value={videoId} />
                        </Form.Group>
                    </Tab>
                </Tabs>
            </Form.Group>
            {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

            <div className="">
                <Button variant="dark" type="submit">Share Art</Button>
            </div>
        </Form>


    );
}





export default NewPostForm