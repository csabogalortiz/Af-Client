import './FeelingCard.css'
import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';

import FeelingsForm from './../FeelingsForm/FeelingsForm'
// import FavPostsButton from './../FavPostsButton/FavPostsButton'

const FeelingCard = (props) => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }
    const { title, content, post,_id} = props;
    


    const { user } = useContext(AuthContext)

    

    return (

        <Card className="mb-4 FeelingCard">

            <Card.Body>
                <Container>
                    {/* <Link to={`/profile/${owner._id}`} activeclassname="activeClicked"> */}

                        <Card.Title>{title}</Card.Title>


                 
                    <h4>{content}</h4>


                 {user && <Button onClick={openModal} variant="dark" size="sm">Edit</Button>}

                </Container>

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Feeling</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FeelingsForm fireFinalActions={fireFinalActions} feelingId={_id} />
                    </Modal.Body>
                </Modal>




            </Card.Body>
        </Card>
    );
}


export default FeelingCard