import styled from "styled-components";
import IconButton from "./IconButton";
import { IoClose } from "react-icons/io5";
import FiltersProducts from "./FiltersProducts";

const Modal = ({ show, closeModal }) => {
  if (!show) return null;

  return (
    <Wrapper>
      <div className='modal center-modal '>
        <div>
          <IconButton
            icon={<IoClose color='#ff4156' size='24px' />}
            onClick={closeModal}
          />
          <div className='filters-product'>
            <FiltersProducts closeModal={closeModal} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.5s ease-in-out;
    margin: 0 auto;
    overflow: auto;
  }
  .center-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .filters-product {
  }
`;

export default Modal;
