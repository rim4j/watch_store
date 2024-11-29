import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";

const Slider = ({ images }) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  width: 100rem;
  height: 40rem;
  border-radius: 10px;
  position: relative;
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
    background-color: #fff;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .dot-item-active {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-body);
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

export default Slider;
