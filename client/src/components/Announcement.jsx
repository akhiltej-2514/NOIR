import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Use Coupon "OFF50" to get 50% discount in Kids wear !!!</Container>;
};

export default Announcement;
