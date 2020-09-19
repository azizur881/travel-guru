import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../data/fakeData';
import './Sundarban.css'
import DatePicker from 'react-date-picker';

const Sundarban = (props) => {
    const sundarban = fakeData.find(spote => spote.area ==="Sundarban")
    const [travel , setTravel]= useState(sundarban);
    const {area,details,image}=sundarban
    const [selectedDate ,setSelectedDate] = useState()
    return (
        
        <div className="home">
            <div className="row">
                <div className="col-md-4">
                <h1>  {area}</h1>
                <p>{details}</p>
                </div>
                <div className="col-md-5">
        <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Origin</Form.Label>
                      <Form.Control type="text" placeholder="From" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Destination</Form.Label>
                      <Form.Control type="text" placeholder="To" />
                    </Form.Group>
            
                  <br/>
             <Form>
                    <DatePicker
                    selected={selectedDate}
                    onChange={ date=> setSelectedDate(date)}/>
             </Form>
                  <Link to ="/booking"> 
                  <Button variant="warning" type="submit">
                      Start Booking
                    </Button>
                  </Link>
    </Form>
                </div>
            </div>
          
        </div>
    );
};

export default Sundarban;