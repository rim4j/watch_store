import styled from "styled-components";

const Button = ({ title, onClick, outline }) => {
  return (
    <Container className='scale ' onClick={onClick}>
      <div className={outline ? "outline" : "default"}>{title}</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-accent);
  color: #fff;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: all ease 0.2s;
  display: inline-block;
  border-radius: 10px;
  border: 2px solid var(--color-accent);

  &:hover {
    filter: brightness(110%);
    transition: all ease 0.2s;
  }

  .default {
    background-color: var(--color-accent);
    color: #fff;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    transition: all ease 0.2s;

    &:hover {
      filter: brightness(130%);

      transition: all ease 0.2s;
      color: #fff;
    }
  }

  .outline {
    /* border: 2px solid var(--color-accent); */
    background-color: #fff;
    color: var(--color-accent);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    transition: all ease 0.2s;

    &:hover {
      background-color: var(--color-accent);
      transition: all ease 0.2s;
      color: #fff;
    }
  }
`;

export default Button;
