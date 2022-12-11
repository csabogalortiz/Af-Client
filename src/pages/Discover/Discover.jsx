
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
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

const Feed = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const [feelings, setFeelings] = useState()
    const { user } = useContext(AuthContext)

    const loadFeelings = () => {
        feelingService
            .getFeelings()
            .then(({ data }) => setFeelings(data))
            .catch(err => console.log(err))
    }
    const fireFinalActions = () => {
        loadFeelings()
        closeModal()
    }
    useEffect(() => {
        loadFeelings()
    }, [])

    return (
        <>
            <Container className="Feed">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        {user && <Button onClick={openModal} variant="dark" size="sm">Create a feeling</Button>}
                        <hr />
                        <h1>Dictionary</h1>
                        {/* <PostsList posts={posts} /> */}
                        {!feelings ? <Loader /> : <FeelingsList posts={feelings} />}
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