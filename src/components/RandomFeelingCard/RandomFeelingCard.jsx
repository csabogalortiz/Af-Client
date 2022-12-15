import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './RandomFeelingCard.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import feelingService from '../../services/feeling.service';

const RandomFeeling = ({ _id, content, title, language }) => {

  return (

    <Container className='rf_Hero'>
      <div className='rf_Hero_Title'>
        {title}
      </div>
      <div className="rf_Hero_SubTitle mt-3 mb-4">
        {language}
      </div>
      <div className="rf_Hero_body">
        {content}
      </div>
      <div className="rf_HeroBTN mt-4">
        <Link to={`/feeling/${_id}`} className="mt-4">
          <Button as="div" variant="outline-light rounded" size="lg">DETAILS</Button>
        </Link>
      </div>

    </Container>



    //   <div
    //     className='p-5 text-center randomFeelingCard'>

    //     <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    //       <div className='d-flex justify-content-center align-items-center h-100'>
    //         <div className='rf.card.Title'>
    //           <h1 className='rf.card.Title'>{title}</h1>


    //           <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
    //             <h1 className='rf.card.Title'>{title}</h1>
    //           </Link>
    //           <h4 className='mb-3'>{content}</h4>
    //           <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
    //             Details
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header >


    // <Card className='randomFeelingCard' border="white">
    //   <Card.Body>
    //     <Link to={`/feeling/${_id}`} activeclassname="activeClicked">
    //       <Card.Title className='rf.card.Title'>{title}</Card.Title>
    //     </Link>
    //     <Card.Text>
    //       {content}
    //       <hr></hr>
    //       <p> Interpret the feeling</p>
    //     </Card.Text>

    //   </Card.Body>
    // </Card>
  );
}




export default RandomFeeling

