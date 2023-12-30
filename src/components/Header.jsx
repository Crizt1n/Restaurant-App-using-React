import React from 'react'
import { Link } from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const [open, setOpen] = useState(false);
  const dispatch =useDispatch()  
  return (
  <div className='bg-dark p-2'>

      <div class="d-flex">
        <div class="p-1 w-100">
        <Link to={'/'} style={{textDecoration:"none"}}>
          <div className='d-flex' >
          <i class="fa-solid fa-plate-wheat fa-2xl mt-2 p-1 text-info me-2" ></i>    
            <h1 className='text-success mt-1'>
             <b>RESTAURANT</b></h1>
          </div>
        </Link>
        </div>

        <div class="p-2 flex-shrink-1">
        <div className='btn btn-outline-secondary  rounded-5' onClick={() => setOpen(!open)}><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
      </div>

      <Collapse in={open}>
      <div>
                                  
        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className=' form-control w-75 mx-auto mb-2 rounded-5'   placeholder='Search by Neighbourhood'/>
                                  
      </div>
    </Collapse>
  </div>
  )
}

export default Header