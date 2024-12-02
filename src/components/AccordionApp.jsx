import { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AccordionApp = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Title onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <span>
          {open ? (
            <FaMinus size='24px' color='#ff4156' />
          ) : (
            <FaPlus size='24px' color='#ff4156' />
          )}
        </span>
      </Title>
      {open && (
        <Content>
          <p>{content}</p>
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;

  cursor: pointer;
  p {
    color: #000;
    line-height: 5rem;
  }
  span {
    cursor: pointer;
  }
`;

const Content = styled.div`
  p {
    font-size: 14px;
    line-height: 3rem;
  }
`;

export default AccordionApp;
