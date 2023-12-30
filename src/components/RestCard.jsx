import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import '../pages/restview.css'

function RestCard({ restaurant }) {
  return (
   <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:"none"}}>
        <div>
            <Card className='w-100 img-hover-shadow'>
          <Card.Img variant="top" src={restaurant.photograph} />
          <Card.Body>
            <Card.Title className='text-center'>{restaurant.name}</Card.Title>
            <hr />
           <Row>
            <Col> 
                <Card.Text>
                {restaurant.neighborhood}
                </Card.Text>
            </Col>
            <Col> 
                <Card.Text>
                {restaurant.cuisine_type}
                </Card.Text>
            </Col>
           </Row>
    
          </Card.Body>
        </Card>
    
       
        </div>
   </Link>
  )
}

export default RestCard