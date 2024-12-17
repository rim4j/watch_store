import styled from "styled-components";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <Message>{message}</Message>;
};

const Message = styled.p`
  font-size: 12px;
  color: var(--color-accent);
`;

export default ErrorMessage;
