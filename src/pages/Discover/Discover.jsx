
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

const Feed = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const [feelings, setFeelings] = useState()
    const [copyFeelings, setCopyFeelings] = useState()


    const { user } = useContext(AuthContext)

    const loadFeelings = () => {
        feelingService
            .getFeelings()
            .then(({ data }) =>{
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
            console.log({query})
            console.log({feelings})

            const filteredFeelings = feelings.filter(elem =>  elem.title.toLowerCase().includes(query.toLowerCase()))
            console.log({filteredFeelings})
            setCopyFeelings(filteredFeelings)
        }
    }



    return (
        <>
            <Container className="Feed">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        {user && <Button onClick={openModal} variant="dark" size="sm">Create a feeling</Button>}
                        <hr />
                        <h1>Dictionary</h1>
                        <SearchBar filterFeelings={filterFeelings} />


                        {/* <PostsList posts={posts} /> */}
                        {!copyFeelings ? <Loader /> : <FeelingsList posts={copyFeelings} />}
                    </Col>
                </Row>
            </Container>
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

export default Feed