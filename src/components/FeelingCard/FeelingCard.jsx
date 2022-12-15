import './FeelingCard.css'
import { Button, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import EditFeeling from './../EditFeeling/EditFeeling'


const FeelingCard = ({ title, content, post, _id, language, img }) => {
    const feeling = { title, content, post, _id, language, img }
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    const { user } = useContext(AuthContext)



    return (

        <Card className='FeelingCard' border="white" style={{ width: '18rem' }}>
            <div className='card2'>


                <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
                    <img src={img} class="FeelingCard-img" />



                    <h3 className="text-title"> {title}</h3>


                </Link>

                <p className='text-body'> <h5 className="feelingCard"> {language}</h5> </p>



                <p className='text-body'><span> {content}</span></p>
                {user && <Button onClick={openModal} variant="dark" size="sm">Edit</Button>}

                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Feeling</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditFeeling fireFinalActions={fireFinalActions} feeling={feeling} />
                    </Modal.Body>
                </Modal>
            </div>
        </Card>

    );
}





export default FeelingCard
