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

        <Container className='mt-5'>
            <Row>
                <h1 className='rf_Hero_Title'>{feelingData.title}</h1>
                <div className="rf_Hero_SubTitle mt-3 mb-4">
                    <p> Language: {feelingData.language}</p>
                </div>
                <div className="rf_Hero_body">
                    <p>{feelingData.content}</p>
                </div>

            </Row>
            <Row>
                <PostsList posts={postsOfFeeling}></PostsList>
            </Row>

        </Container >
    )
}

export default Feeling