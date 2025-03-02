
import { Carousel} from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel controls={true} indicators={true} interval={4000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg"
            alt="Lalibela Rock-Hewn Churches"
          />
          <Carousel.Caption>
            <h3>Discover Lalibela</h3>
            <p>Explore the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage site.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg"
            alt="Simien Mountains National Park"
          />
          <Carousel.Caption>
            <h3>Adventure in Simien Mountains</h3>
            <p>Hike through breathtaking landscapes and spot rare wildlife like the Gelada baboon.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgix.brilliant-ethiopia.com/Omo-valley-pic-3.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1120&h=600&q=60"
            alt="Danakil Depression"
          />
          <Carousel.Caption>
            <h3>Experience the Danakil Depression</h3>
            <p>Witness the mesmerizing landscapes of one of the hottest places on Earth.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgix.brilliant-ethiopia.com/Omo-dancing-WE.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1120&h=600&q=60"
            alt="Omo Valley Tribes"
          />
          <Carousel.Caption>
            <h3>Meet the Omo Valley Tribes</h3>
            <p>Discover the unique traditions and cultures of Ethiopia’s indigenous tribes.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero