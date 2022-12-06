import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import postService from "./../../services/post.service"
import Modal from 'react-bootstrap/Modal';


function handleFormSubmit() {
}
function handleInputChange() {

}
function MyVerticallyCenteredModal(props) {
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
                    <Form.Group className="" controlId="desc">
                        <p>CATALINA</p>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="len">
                        <Form.Control type="text" onChange={handleInputChange} placeholder="Interpreta el sentimiento del dia" name="length" />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="inv">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="image">
                        <Form.Label>Add to your Post</Form.Label>
                        <Button variant="dark" >Draw</Button>
                        <Button variant="dark" >Photo</Button>
                        <Button variant="dark">Music</Button>
                    </Form.Group>
                </Form>
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



export default NewPostForm