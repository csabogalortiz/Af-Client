import { Container, Row, Col, Button } from 'react-bootstrap'
import './Feeling.css'
import feelingList from '../../components/FeelingsList/FeelingsList'
import FeelingService from '../../services/feeling.service'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PostService from '../../services/post.service'
import PostsList from '../../components/PostsList/PostsList'


const Feeling = () => {

    const [feelingData, setFeelingData] = useState({})
    const [postsOfFeeling, setpostsOfFeeling] = useState([])

    const { feeling_id } = useParams()

    useEffect(() => {
        FeelingService
            .getFeeling(feeling_id)
            .then(({ data }) => setFeelingData(data))
            .catch(console.error)


        PostService
            .postsOfFeeling(feeling_id)
            .then(({ data }) => setpostsOfFeeling(data))
            .catch(err => console.error(err))
    }, [])



    return (
        <Container className="Feeling">


            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>{feelingData.title}</h1>
                    <p>{feelingData.content}</p>
                    <p>{feelingData.language}</p>
                    <hr></hr>

                </Col>

                <Col>
                    <h3>Posts of this feeling</h3>
                    <PostsList posts={postsOfFeeling}></PostsList>
                    <hr />
                </Col>

            </Row>

        </Container>
    )
}

export default Feeling