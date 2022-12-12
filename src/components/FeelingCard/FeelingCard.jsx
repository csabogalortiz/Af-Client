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
    const { title, content, post, _id } = props;



    const { user } = useContext(AuthContext)



    return (

        <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
            <Card className='FeelingCard' border="white" style={{ width: '18rem' }}>
                <Card.Title>
                    <h3>  {title}</h3>


                </Card.Title>
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
                            <FeelingsForm fireFinalActions={fireFinalActions} feelingId={_id} />
                        </Modal.Body>
                    </Modal>




                </Card.Body>
            </Card>
        </Link>
    );
}





export default FeelingCard
