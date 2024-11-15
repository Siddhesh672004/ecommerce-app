import { Carousel } from "react-bootstrap";
import Carousel1 from '../../assets/Carousel1.jpg';
import Carousel2 from '../../assets/Carousel2.jpg';
import Carousel3 from '../../assets/Carousel3.jpg';


const Slider = () => {
  return (
    <>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img src={Carousel1} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Carousel2} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel3} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider;