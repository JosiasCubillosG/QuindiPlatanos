import React from 'react';
import Layout from '../components/Layout';
import DemoCarousel from '../components/carousel';
import "./styles/detailDisease.css"
class DetailDisease extends React.Component {
    render() {
        return (
            <Layout>
                <div className="detailDisease-container">
                    <div className="nameDisease">
                        <h2>Nombre de Enfermedad</h2>
                    </div>
                    <div className="carouselDisease">
                        <DemoCarousel />
                    </div>
                    <div className="symptomatology">
                        <h3>Sintomatologia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Praesent eros orci, lacinia eleifend ipsum condimentum, 
                            tempor eleifend mauris. In faucibus rutrum pulvinar. 
                            Sed egestas metus sed mi ultricies vulputate ut at quam.
                            nt sit amet urna finibus, luctus lorem sed, tempus enim. 
                            Aenean imperdiet ultrices pulvinar</p>
                    </div>
                    <div className="treatment">
                        <h3>Tratamiento</h3>
                        <p>Morbi sollicitudin neque eu efficitur efficitur. 
                            Nullam ipsum orci, bibendum quis nulla id, blandit volutpat tellus. 
                            Nunc maximus massa sit amet porta commodo. Mauris efficitur arcu mauris, 
                            vitae congue magna pellentesque at. In sagittis urna tellus, 
                            id tristique ex tempor rhoncus. Suspendisse potenti. 
                            Sed maximus dui ac ante posuere porttitor</p>
                    </div>
                    <div className="contactSpecialize">
                        <button className="btnContact">Contactar especialista</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default DetailDisease;