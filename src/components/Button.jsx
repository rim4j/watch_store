import styled from "styled-components";

const Button = ({ title, onClick, outline, loading, icon }) => {
  return (
    <Container className='scale ' onClick={onClick}>
      <div className={outline ? "outline" : "default"}>
        {loading ? <div className='loading-sm' /> : title}
        {icon && <span>{icon}</span>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-accent);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all ease 0.2s;
  display: inline-block;
  border-radius: 10px;
  border: 2px solid var(--color-accent);
  width: 150px;
  height: 50px;
  span {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--color-accent);
      transition: all ease 0.2s;
      color: #fff;
    }
  }
`;

export default Button;
