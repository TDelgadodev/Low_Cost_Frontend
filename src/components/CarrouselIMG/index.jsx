import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrousel.css'; 

const Carrousel = () => {
  return (
    <div className="carousel-container m-3">
      <Carousel nextLabel="" prevLabel="">
        <Carousel.Item className="custom-carousel-item">
          <img
            className="d-block w-100 custom-carousel-item img-fluid"
            src="moto.jpg"
            alt="Imagen 1"
          />
        </Carousel.Item>
        <Carousel.Item className="custom-carousel-item">
          <img
            className="d-block w-100 custom-carousel-item img-fluid"
            src="moto.jpg"
            alt="Imagen 2"
          />
        </Carousel.Item>
        <Carousel.Item className="custom-carousel-item">
          <img
            className="d-block w-100 custom-carousel-item img-fluid"
            src="moto.jpg"
            alt="Imagen 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
};

export default Carrousel;
