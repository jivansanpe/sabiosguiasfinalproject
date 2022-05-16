import Footer from "../components/Footer";
import Header from "../components/Header";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./Main.css";

export default function Main() {

  return (
    <>
      <Header />
      <div className="main-container">
        <Carousel dynamicHeight={true}>
          <div>
            <img src="/img/img_4053_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Vista general</p>
          </div>
          <div>
            <img src="/img/img_4068_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Acequia subterránea</p>
          </div>
          <div>
            <img src="/img/p1130069_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Kilómetros de acequia</p>
          </div>
          <div>
            <img src="/img/img_4053_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Vista general</p>
          </div>
          <div>
            <img src="/img/img_4068_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Acequia subterránea</p>
          </div>
          <div>
            <img src="/img/p1130069_resultado_resultado.png" alt="image not loaded"/>
            <p className="legend">Kilómetros de acequia</p>
          </div>
        </Carousel>
        <div>
          <span>Aquí iría otra cosa</span>
        </div>
      </div>
      <Footer />
    </>
  );
}