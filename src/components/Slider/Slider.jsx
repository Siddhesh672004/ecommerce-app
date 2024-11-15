import { Carousel } from "react-bootstrap";
import styles from './Slider.module.css';

const Slider = () => {
  return (
    <>
        <Carousel className="m-4">
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg" alt="First slide"  className={styles.carouselImage}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://media.istockphoto.com/id/822518448/photo/shopping-cart-icon-with-lines-pointing-on-different-places-around-the-globe-online-shopping.jpg?s=1024x1024&w=is&k=20&c=-Jghg_mBm2h1-76qrEzhOrDHwvajCUuHJxWjt-TsHtk=" alt="Second slide" className={styles.carouselImage}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className={styles.carouselContainer} >
          <img src="https://media.istockphoto.com/id/1304849847/photo/online-shopping-business-icon-application.jpg?s=1024x1024&w=is&k=20&c=ejo5PsVeH8xWEyypqee_8rACEdbWpraW1u0i913sUms=" alt="Third slide" className={styles.carouselImage}/>
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