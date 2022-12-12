// import './FeelingCard.css'
import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './RandomFeelingCard.css'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import feelingService from '../../services/feeling.service';
import FeelingsList from '../FeelingsList/FeelingsList'


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
        <Card.Header as="h5"> Random feeling of the day</Card.Header>
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


// const BeersDetails = () => {


//     const [beer, setBeer] = useState()

  


//     useEffect(() => {
//         loadRandomBeer()
//     }, [])

//     const loadRandomBeer = () => {
//         BeersAPI
//             .getRandomBeer()
//             .then(({ data }) => setBeer(data))
//             .catch(err => console.log(err))
//     }




// return (
//     <Card>
//     <Card.Header as="h5"> Random feeling of the day</Card.Header>
//     <Card.Body>
//       <Card.Title>Special title treatment</Card.Title>
//       <Card.Text>
//         With supporting text below as a natural lead-in to additional content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
// );