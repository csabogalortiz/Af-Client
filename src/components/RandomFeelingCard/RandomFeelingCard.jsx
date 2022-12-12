import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './RandomFeelingCard.css'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import feelingService from '../../services/feeling.service';



const RandomFeeling = () => {

    const [feeling, setFeeling] = useState({})

    useEffect(() => {
        loadRandomFeeling()
    }, [])
    
       
  const loadRandomFeeling = () => {
   
    feelingService
        .getRandomFeelings()
        .then(({ data }) => setFeeling(data))
        .catch(err => console.log(err))
  }

    return (
        <Card className='randomFeelingCard'  border="white">
        <Card.Header as="h5"> Random feeling </Card.Header>
        <hr></hr>
        <Card.Body>
          <Card.Title>{feeling.title}</Card.Title>
          <Card.Text>
           {feeling.content}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}




export default RandomFeeling

