import { Carousel } from "react-bootstrap";
import styles from './Slider.module.css';

const Slider = () => {
  return (
    <>
        <Carousel className="m-4">
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://drive.google.com/drive/u/1/folders/11P2G3Y3Knwjnbw1Y9ylyOOUi5c-9_AQF" alt="First slide"  className={styles.carouselImage}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://drive.google.com/drive/u/1/folders/11P2G3Y3Knwjnbw1Y9ylyOOUi5c-9_AQF" alt="Second slide" className={styles.carouselImage}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://drive.google.com/drive/u/1/folders/11P2G3Y3Knwjnbw1Y9ylyOOUi5c-9_AQF" alt="Third slide" className={styles.carouselImage}/>
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