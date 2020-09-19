import React, { useState } from 'react';
import fakeData from '../../data/fakeData';
import img1 from '../../data/Image/Rectangle 26.png';
import img2 from '../../data/Image/Rectangle 27.png';
import img3 from '../../data/Image/Rectangle 28.png'
import icon from '../../data/Icon/star_1_.png'
import './Booking.css'
const Booking = () => {
    const touristSpot = fakeData.find(spote => spote.id === "id")
    const { area, hotel, price } = touristSpot;
    const imgDesign = {
        width: "170px",
        height: "160px",
        marginLeft: "100px",
        marginTop: "20px"




    }
    const paragraph = {
        color: "black",


    }

    return (
        <div style={{ margin: "100px" }}>
            <div className="row">
                <div className="col-md-6">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <img style={imgDesign} src={img1} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>{hotel}</h4>
                            <p style={paragraph}> 4 guest 2 bed 2bathroom full air conditioned have cancellation policy</p>
                            <img style={{ width: "15px", height: "15px" }} src={icon} alt="" /> 4.9(10)  <strong>${price}/night</strong>

                        </div>

                    </div>

                    <div className="row my-3">
                        <div className="col-md-6">
                            <img style={imgDesign} src={img2} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>Officer CLub</h4>
                            <p style={paragraph}> 4 guest 2 bed 2bathroom full air conditioned have cancellation policy</p>
                            <img style={{ width: "15px", height: "15px" }} src={icon} alt="" /> 4.9(10)  <strong>${price}/night</strong>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6">
                            <img style={imgDesign} src={img3} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>Hotel Grand Sultan</h4>
                            <p style={paragraph}> 4 guest 2 bed 2bathroom full air conditioned have cancellation policy</p>
                            <img style={{ width: "15px", height: "15px" }} src={icon} alt="" /> 4.9(10)  <strong>${price}/night</strong>
                        </div>

                    </div>
                </div>
                 {/* google map here embed */}
                
                
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473624.53102920536!2d88.64338676128354!3d21.96560648577664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004caac2c7b315%3A0x4716abcfbb16c93c!2sSundarbans!5e0!3m2!1sen!2sbd!4v1600475584443!5m2!1sen!2sbd" width="400" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Booking;