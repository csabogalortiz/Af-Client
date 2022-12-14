import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './RandomFeelingCard.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import feelingService from '../../services/feeling.service';

const RandomFeeling = ({ _id, content, title }) => {

  return (
    <Card className='randomFeelingCard' border="white">
      <Card.Header as="h5"> Random feeling </Card.Header>
      <hr></hr>
      <Card.Body>
        <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>
          {content}
          <hr></hr>
          <p> Interpret the feeling</p>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}




export default RandomFeeling

