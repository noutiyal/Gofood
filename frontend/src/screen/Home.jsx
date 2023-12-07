import React, { useEffect, useState } from 'react'
import Cartmain from '../components/Cartmain';
import { useSelector, useDispatch } from 'react-redux'
import { Cateorydata, fooddata } from '../Redux/action/data/datadispaly';
// import {Carouselmain} from '../components'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [serach, setserach] = useState('')
  const dispatch = useDispatch()
  const category = useSelector((state) => state?.fooddata?.category?.data)
  const food = useSelector((state) => state?.fooddata?.displaydata?.data)
  console.log(food, "sdsdsdsds")


  useEffect(() => {
    dispatch(fooddata())
    dispatch(Cateorydata())

  }, [])
  return (
    <div className='container-fluid '>
      <div>
        <Row><Col className='p-0'>
          <div className='position-relative'>
            <Carousel className='P-0 mian_crorusel'>
              <Carousel.Item >
                <div>
                  <img className='q' src="/img/club-sandwich-3538455_1280.jpg" alt="" />

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className='q' src="/img/snack-2635035_1280 (1).jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className='q' src="/img/pizza-329523_1280.jpg" alt="" />
              </Carousel.Item>
            </Carousel>
            <div className="rahul_bisht ">
              <input className="form-control " type="search" placeholder="Search" aria-label="Search" value={serach} onChange={(e) => { setserach(e.target.value) }} />
            </div>
          </div>

        </Col></Row>
      </div>
      <div className='m-3'>
        {category ? category?.map((e) => {
          return (
            <>
              <div className='row mb-3'>
                <h4>{e.categoryName}</h4>
                {food
                  ? food?.filter((items) => (items.CategoryName == e.categoryName) && (items.name.toLowerCase().includes(serach.toLocaleLowerCase())))?.map((filteredItem) => {

                    return (
                      <div className='col-12 col-md-6 col-lg-3'>

                        <Cartmain
                          foodName={filteredItem.name}
                          options={filteredItem?.options}
                          imgscr={filteredItem.img}
                          description={filteredItem.description}
                        > </Cartmain >
                      </div>
                    );
                  })
                  : "error"}
              </div>

            </>
          )
        }) : "error"}


      </div>


    </div>
  )
}
