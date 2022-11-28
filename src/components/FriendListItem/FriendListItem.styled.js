import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const Name = styled.p`
  font-size: 25px;
  line-height: 1.62;
  padding-left: 20px;
`;
export const Item = styled.li`
  align-items: center;
  display: flex;
  gap: 20px;
  min-width: 200px;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
  background-color: #fff;
  box-shadow: 0px 14px 16px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 15px;
  border-radius: 5px;
`;
export const Image = styled.img`
  width: 48px;
`;
