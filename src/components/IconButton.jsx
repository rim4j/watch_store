import styled from "styled-components";

const IconButton = ({ className, onClick, backgroundColor, icon, badge }) => {
  return (
    <div className='scale'>
      <Container
        className={className}
        onClick={onClick}
        style={{ backgroundColor }}
      >
        <Icon>{icon}</Icon>

        {badge && (
          <Badge>
            <span>{badge}</span>
          </Badge>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #e6e6e6; */
  padding: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Badge = styled.div`
  color: #ff4156;
  position: absolute;
  top: -10px;
  left: -5px;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  margin-top: 10px;
`;

export default IconButton;
