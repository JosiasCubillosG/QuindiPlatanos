import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import enfermedad1 from "../../public/images/enfermedad1.jpeg"
import enfermedad2 from "../../public/images/Enfermedades.jpg"
//ff

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                showThumbs={false} 
                infiniteLoop={true} 
                showStatus={false}
                width={"80%"}
                autoPlay={true}
                interval={5000}
            >
                <div>
                    <img src={enfermedad1}/>
                </div>
                <div>
                    <img src={enfermedad2} />
                </div>
                <div>
                    <img src={enfermedad1}/>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel