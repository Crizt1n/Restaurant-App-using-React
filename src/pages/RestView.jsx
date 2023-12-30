import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './restview.css'
import RestReview from './RestReview';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView(restaurant) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [open, setOpen] = useState(false);

    const {id} = useParams()
    console.log(id);

    const allRestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
    console.log(allRestaurant);
    const selectedrestaurant = allRestaurant.find(item=>item.id == id)
    console.log(selectedrestaurant);

  return (
    <>
       <div className='container p-3'>
            <div className="row mt-4 mb-5">
                    <hr />
                    <h3 className='text-center'><span className='text-success'>RESTAURANT</span> DETAILS</h3>
                    <hr />
                <div className="col-md-4">
                    <img src={selectedrestaurant.photograph}  className='img-hover-shadow w-100  rounded' alt="no image" />
                </div>
                <div className="col-md-8">
                   
                    <ListGroup className='p-3 shadow img-hover-shadow'>
                    <ListGroup.Item className='text-center fs-4'>{selectedrestaurant.name}</ListGroup.Item>
                    <ListGroup.Item>Neigbourhood : {selectedrestaurant.neighborhood} </ListGroup.Item>
                    <ListGroup.Item>Cuisine type : {selectedrestaurant.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item>Address : {selectedrestaurant.address} </ListGroup.Item>

                    <div className='mx-auto d-flex mt-3 ' >
                        <button className='btn btn-outline-dark me-2' onClick={handleShow}>Operating Hours</button>
                        
                        <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                <ListGroup.Item className='mb-2'>Monday    : <b>{selectedrestaurant.operating_hours.Monday}</b> </ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Tuesday   : <b>{selectedrestaurant.operating_hours.Tuesday}</b></ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Wednesday : <b>{selectedrestaurant.operating_hours.Wednesday}</b></ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Thursday  : <b>{selectedrestaurant.operating_hours.Thursday}</b></ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Friday    : <b>{selectedrestaurant.operating_hours.Friday}</b></ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Saturday  : <b>{selectedrestaurant.operating_hours.Saturday}</b></ListGroup.Item>
                                <ListGroup.Item className='mb-2'>Sunday    : <b>{selectedrestaurant.operating_hours.Sunday}</b></ListGroup.Item>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            <button className='btn btn-outline-dark' onClick={() => setOpen(!open)}>See the Reviews</button> 
                         
                             
                    </div>
                    <Collapse in={open}>
                                    <div>
                                        <hr />
                                    
                                        
                                        {selectedrestaurant.reviews.map((review, index) => (
                            <div key={index} className='mb-3'>
                                <h5>Name and Date : {review.name}, {review.date}</h5>
                                <h5>Rating : {review.rating}</h5>
                                <p>Description : {review.comments}</p>
                            </div>
                        ))}
                                    
                                    </div>
                    </Collapse>

                    </ListGroup>
                   
                  
                </div>  
                <hr className='mt-3'/>
            </div>
    
       </div>
    </>
  )
}

export default RestView