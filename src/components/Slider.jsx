import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";

const Slider = ({ images }) => {
  return (
    <Container>
      <div className='wrapper'>
        <Fade>
          {images.map((img, index) => (
            <div key={index}>
              <img className='image-slide' src={img.image} />
              <h2 className='dot'>
                {images.map((item, i) => (
                  <div
                    key={i}
                    className={index === i ? "dot-item-active" : "dot-item"}
                  />
                ))}
              </h2>
            </div>
          ))}
        </Fade>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .wrapper {
    width: 100rem;
    height: 40rem;
    border-radius: 10px;
    position: relative;
  }
  .image-slide {
    width: 100rem;
    height: 40rem;
    border-radius: 10px;
    object-fit: cover;
  }
  .dot {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot-item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-body);
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .dot-item-active {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  @media (max-width: 1000px) {
    .wrapper {
      width: 50rem;
      height: 20rem;
    }
    .image-slide {
      width: 50rem;
      height: 20rem;
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      width: 30rem;
      height: 15rem;
    }
    .image-slide {
      width: 30rem;
      height: 15rem;
    }
  }
`;

export default Slider;
