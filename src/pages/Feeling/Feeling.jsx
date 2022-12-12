import { Container, Row, Col, Button } from 'react-bootstrap'
import './Feeling.css'
import feelingList from '../../components/FeelingsList/FeelingsList'
import FeelingService from '../../services/feeling.service'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Feeling = () => {


    // const [feelingData, setFeelingData] = useState()

    // const { feeling_id } = useParams()

    // FeelingService
    //     .getFeeling(feeling_id)
    //     .then(({ data }) => setFeelingData(data))
    //     .catch(console.error)


    return (
        <Container className="Feeling">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    {/* <h1>{feelingData.title}</h1> */}
                    <hr />
                    <p>Im your Feeling!</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Feeling