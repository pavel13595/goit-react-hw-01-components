import styled from 'styled-components';

export const Box = styled.div`
  margin: 25px 0 75px 0;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #eeeed9;
  width: 375px;
  margin: auto;
`;

export const ImgProfile = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin-top: 20px;
  border-radius: 100px;
  box-shadow: 0 0 7px #666;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const Username = styled.p`
  font-size: 22px;
  line-height: 1.62;
  color: rgb(15, 15, 79);
  margin-top: 20px;
`;

export const Tag = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 20px;
  color: #616161;
  margin-top: 20px;
`;
export const Location = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 20px;
  color: #616161;
  margin: 5px 0 20px 0;
`;
export const Stats = styled.ul`
  width: 100%;
  display: flex;
  border-radius: 0 0 15px 15px;
  background-color: #d9d9c6;
  padding: 0;
  align-items: center;
  justify-content: center;
`;
export const ItemStatus = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-last-child(-n + 2) {
    border-left: 1px solid #616161;
  }
  padding: 5px;
`;
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 16px;
  text-align: center;
  color: #484137;
`;

export const QuantitySpan = styled.span`
  color: #0f0f4f;
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  margin: 10px auto;
`;
