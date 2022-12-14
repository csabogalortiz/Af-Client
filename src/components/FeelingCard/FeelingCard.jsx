import './FeelingCard.css'
import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import EditFeeling from './../EditFeeling/EditFeeling'


const FeelingCard = ({ title, content, post, _id }) => {
    const feeling = { title, content, post, _id }
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    const { user } = useContext(AuthContext)

    return (

        <Card className='FeelingCard' border="white" style={{ width: '18rem' }}>
            <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
                <Card.Title>
                    <h3> {title}</h3>
                </Card.Title>
            </Link>
            <hr></hr>

            <Card.Body>

                <Card.Text>
                    <h4>{content}</h4>
                </Card.Text>


                {user && <Button onClick={openModal} variant="dark" size="sm">Edit</Button>}

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Feeling</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditFeeling fireFinalActions={fireFinalActions} feeling={feeling} />
                    </Modal.Body>
                </Modal>

            </Card.Body>
        </Card>

    );
}





export default FeelingCard
