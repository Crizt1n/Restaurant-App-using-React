import {  Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const {allRestaurant, loading, error}=useSelector((state)=> state.restaurantSlice)
  console.log(allRestaurant);
  const dispatch= useDispatch()
  
  useEffect(()=>{
   dispatch(fetchRestaurant())

  },[])

  return (
    <>
      <Row>

    {/*   <div>
        {
          loading && 
          <p> <Spinner animation="border" className='text-warning'/>Loading...</p>
        }
      </div> */}

      {allRestaurant?.length>0?
      allRestaurant?.map((restaurant)=>(
        <Col sm={12} md={6} lg={3} className='p-3'>

        <RestCard restaurant={restaurant}/>

      </Col>
      ))
        : <p>No Restaurant available</p> }

      </Row>
      
    </>
  )
}

export default Home