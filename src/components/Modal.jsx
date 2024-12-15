import styled from "styled-components";
const Modal = ({ show, onCancel, onSubmit }) => {
  return (
    <Wrapper>
      {show && <div className='backdrop' onClick={onCancel}></div>}
      <div
        className='modal center'
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : 0,
        }}
      >
        <h2>title</h2>
        <p>details</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .backdrop {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.87);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 300;
  }
  .modal {
    width: 20rem;
    height: 30rem;
    background: #e6e6e6;
    z-index: 400;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transition: all 0.5s ease-in-out;
  }
  .center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Modal;
