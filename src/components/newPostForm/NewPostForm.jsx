import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import postService from "./../../services/post.service"
import Modal from 'react-bootstrap/Modal';
import uploadServices from "../../services/upload.service"
import './NewPostForm.css'
import React from 'react';
import { AuthContext } from '../../contexts/auth.context';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';


const NewPostForm = ({ fireFinalActions }) => {

    function MyVerticallyCenteredModal(props) {

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
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Interpreta el feeling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


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
                    </Form>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h1>Title 1</h1>
                                        {/* <Form.Control type="file" onChange={handleFileUpload} /> */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h1>Title 2</h1>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                </Modal.Body>
                <Modal.Footer>
                    <div className="">
                        <Button variant="dark" type="submit">Share Art</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }

    function NewPostForm() {
        const [modalShow, setModalShow] = useState(false);

        return (
            <>



                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

}

export default NewPostForm