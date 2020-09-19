import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import './Home.css'
import img1 from '../../data/Image/sundorbon.png';
import img2 from '../../data/Image/Sreemongol.png';
import img3 from '../../data/Image/Sajek.png'
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const imageDesign = {
        width: "270px",
        height: "416px"

    }
    const fontDesign = {
        color: "white",
        fontWeight: "400",
        fontSize: "66px",
        textItem: "center",
        fontFamily: "Bebas Neue",
        marginLeft: "110px",
        padding: "20px"
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="home">
                <Heading></Heading>

                <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-8 d-flex justify-content-center  align-items-center">
                                <h1 style={fontDesign}>Welcome To SundarBans </h1>
                                
                                <Link to ="/sundarban">
                                      <Button id="button" className="ml-5" variant="warning">Booking <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                     </Button>
                                </Link>

                                <p>The Sundarban is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal</p>

                                </div>
                                    <div className="col-md-3">
                                        <img
                                            style={imageDesign}
                                            className="d-block w-100"
                                            src={img1}
                                            alt="First slide"/>
                                 </div>
                             </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-8 d-flex justify-content-center  align-items-center">
                                <h1 style={fontDesign}>Welcome To Sreemongol </h1>
                                 <Link to ="/sremongal">     
                                        <Button id="button" className="ml-5" variant="warning">Booking <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>
                                        </Button>
                                </Link>
                                <p style={{ color: "white" }}>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor. A copper plate of Raja Marundanath from the 11th century was found in Kalapur</p>
                            </div>
                                 <div className="col-md-3">
                                     <img
                                    style={imageDesign}
                                    className="d-block w-100"
                                    src={img2}
                                    alt="First slide"/>
                                 </div>
                        </div>


                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-8 d-flex justify-content-center  align-items-center">
                                <h1 style={fontDesign}>Welcome To Saint Martin </h1>
                                 <Link to ="/saintmartin">  
                                     <Button id="button" className="ml-5" variant="warning"> Booking <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                     </Button>
                                </Link>
                                    <p style={{ color: "white" }}>Millennia ago, the island used to be an extension of the Teknaf peninsula, but at a later time some portion of this peninsula got submerged and thus the southernmost part of the aforementioned peninsula became an island, and was disconnected from the Bangladesh mainland.</p>
                            </div>
                            <div className="col-md-3">
                                    <img
                                    style={imageDesign}
                                    className="d-block w-100"
                                    src={img3}
                                    alt="First slide"/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>



  );
        </div>

        </>
    );
};

export default Home;