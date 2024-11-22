import styled from "styled-components";

const IconButton = ({ onClick, backgroundColor, icon, badge }) => {
  return (
    <Container onClick={onClick} style={{ backgroundColor }}>
      <Icon>{icon}</Icon>

      {badge && <Badge>{badge}</Badge>}
    </Container>
  );
};
const Badge = styled.span`
  color: #ff4156;
  position: absolute;
  top: -10px;
  left: -5px;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.div`
  margin-top: 10px;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default IconButton;
