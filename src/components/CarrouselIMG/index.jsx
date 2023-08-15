import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrousel.css';

const Carrousel = ({ images }) => {
  return (
    <div className="carousel-container m-3">
      <Carousel nextLabel="" prevLabel="">
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index} className="custom-carousel-item">
            <img
              className="d-block w-100 custom-carousel-item img-fluid"
              src={imageUrl}
              alt={`Imagen ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;