import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <button className='btn btn-outline-dark'  onClick={() => setOpen(!open)}>See the Reviews</button>

    
          <Collapse in={open}>
          <div>
            <hr />
         
             
            <div className=''>
                <h4>Name and Date :</h4>
                <h4>Rating : </h4>
                <p>Description :</p>
            </div>
        
          </div>
        </Collapse>
      

    </>
  )
}

export default RestReview