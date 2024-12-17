import styled from "styled-components";

const Input = ({ placeholder, type, value, onChange, dir, phone }) => {
  return (
    <Container>
      <p className='placeholder'>{placeholder}</p>
      <div className='input-container'>
        <input
          style={dir ? { direction: "ltr" } : { direction: "rtl" }}
          value={value}
          onChange={onChange}
          className={`input ${phone ? "borderPhone" : "borderRadius"} 
           `}
          type={type}
        />
        {phone && <p className='phone'>98+</p>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .placeholder {
    font-size: 12px;
  }
  .borderPhone {
    border-radius: 0 8px 8px 0;
  }
  .borderRadius {
    border-radius: 8px;
  }

  .input {
    margin-top: 2rem;
    margin-bottom: 10px;
    padding: 15px;
    width: 100%;
    /* border-radius: 8px; */
    border: 1px solid #ccc;
    outline: none;
    transition: all 0.2s ease;
    font-size: 12px;
    &:focus {
      transition: all 0.3s ease-in-out;
      border: 1px solid var(--color-primary);
    }
  }
  .input-container {
    display: flex;
    align-items: center;
  }
  .phone {
    background-color: var(--color--light-grey);
    border-radius: 8px 0 0 8px;
    padding: 15px;
    font-size: 12px;
    margin-top: 2rem;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 8px 0 0 8px;
    border: 1px solid var(--color--light-grey);
    cursor: default;
  }
`;

export default Input;
