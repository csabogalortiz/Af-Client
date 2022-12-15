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
        mediaType: "TEXT",
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

    const handleMediaType = (e) => {
        console.log(e)
        setPotsData({ ...postData, mediaType: e })
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



    return (

        <Form className="formGlobal" onSubmit={handleFormSubmit}>
            <Form.Group className="FeelingTitle mb-3" controlId="name">
                <h3> Feeling of the Day: {feeling?.title}</h3>
            </Form.Group>
            {/* 
            <Form.Select className="mb-3" aria-label="Default select example" onChange={handleInputChange} name="mediaType">
                <option>What type of art are you sharing? </option>
                <option value="IMG">Photo</option>
                <option value="CANVAS">Drawing</option>
                <option value="SONG">Music</option>
                <option value="TEXT">Text</option>
            </Form.Select> */}

            <Form.Group className="mb-5 formType" controlId="content">
                <Form.Control as="textarea" onChange={handleInputChange} placeholder="A few words about this post..." rows={5} name="content" className="inputPost formTextArea" value={content} />
            </Form.Group>

            <Form.Group className="mb-5 mt-5" controlId="tabs">
                <Tabs
                    onSelect={(e) => { handleMediaType(e) }}
                    variant='pills'
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3 "
                    justify
                >
                    <Tab tabClassName='formTabs' eventKey="IMG" title="Picture" style={{ color: 'red' }}>
                        <Form.Group className="mb-3" controlId="postImg">
                            <Form.Label className='formTabs'> Share a Picture</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>
                    </Tab>
                    <Tab tabClassName='formTabsPurple' eventKey="CANVAS" title="Draw">
                        <DrawingCanvas saveCanvasData={saveCanvasData} canSend={canSend} setCanSend={setCanSend} setPotsData={setPotsData} />
                    </Tab>
                    <Tab tabClassName='formTabsPink' eventKey="SONG" title="Music">
                        <Form.Group className="mb-5" controlId="videoId">
                            <Form.Control as="input" pattern="^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$" onChange={handleInputChange} placeholder="Paste your Youtube URL" rows={5} name="videoId" className="inputPost" value={videoId} />
                        </Form.Group>
                    </Tab>
                </Tabs>
            </Form.Group>
            {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

            <div className="">
                <Button variant="outline-light rounded" size="lg" type="submit">Share Your Art Piece</Button>
            </div>
        </Form >


    );
}





export default NewPostForm