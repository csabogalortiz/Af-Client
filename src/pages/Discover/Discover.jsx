
import './Discover.css'
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import Loader from './../../components/Loader/Loader'
import NewFeelingForm from '../../components/FeelingsForm/FeelingsForm'
import feelingService from '../../services/feeling.service'
import FeelingsList from '../../components/FeelingsList/FeelingsList'
import SearchBar from '../../components/SearchBar/SearchBar'

const Discover = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const [feelings, setFeelings] = useState()
    const [copyFeelings, setCopyFeelings] = useState()

    const { user } = useContext(AuthContext)


    const loadFeelings = () => {
        feelingService
            .getFeelings()
            .then(({ data }) => {
                setFeelings(data)
                setCopyFeelings(data)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadFeelings()
        closeModal()
    }

    useEffect(() => {
        loadFeelings()
    }, [])

    const filterFeelings = query => {
        if (query === '') {
            setCopyFeelings(feelings)
        } else {
            const filteredFeelings = feelings.filter(elem => elem.title.toLowerCase().includes(query.toLowerCase()))
            setCopyFeelings(filteredFeelings)
        }
    }


    return (
        <>
            < div className="Feed">
                <Row>

                    <Col md={{ span: 8, offset: 2 }}>

                        {user.role === 'ADMIN' &&
                            <Button onClick={openModal} variant="dark" size="sm">Create a feeling</Button>
                        }

                        <h1 className='rf_Hero_Title_Discover'>Discover</h1>
                        <div className="rf_Hero_SubTitle_Page mb-4">
                            <p>SEARCH .  LEARN .   FEEL</p>
                        </div>
                        <SearchBar className='mb-5' filterFeelings={filterFeelings} />
                        <div className='mt-5'>
                            {!copyFeelings ? <Loader /> : <FeelingsList posts={copyFeelings} />}
                        </div>
                    </Col>
                </Row>
            </div >
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a feeling</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewFeelingForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>


    )
}

export default Discover