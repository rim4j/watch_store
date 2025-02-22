import styled from "styled-components";
import Button from "./Button";
const Modal = ({ show, closeModal, onSubmit }) => {
  if (!show) return null;

  return (
    <Wrapper>
      <div className='modal center-modal '>
        <div>
          <Button onClick={closeModal} title='close' />
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
  }
  .center-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export default Modal;
