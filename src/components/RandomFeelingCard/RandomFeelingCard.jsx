import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './RandomFeelingCard.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import feelingService from '../../services/feeling.service';

const RandomFeeling = (props) => {

  const { feeling } = props


  return (
    <Card className='randomFeelingCard' border="white">
      <Card.Header as="h5"> Random feeling </Card.Header>
      <hr></hr>
      <Card.Body>
        <Link to={`/feeling/${feeling._id}`} activeclassname="activeClicked">
          <Card.Title>{feeling.title}</Card.Title>
        </Link>
        <Card.Text>
          {feeling.content}
          <hr></hr>
          <h6> Interpret the feeling</h6>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}




export default RandomFeeling

