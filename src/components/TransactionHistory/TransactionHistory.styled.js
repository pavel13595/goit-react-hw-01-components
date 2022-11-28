import styled from 'styled-components';
export const TransactionHistoryTb = styled.table`
  table-layout: auto;
  margin: 60px auto;
  background-color: #f0f0f0;
  padding: 10px;
  border: 2px solid #5c5c5c;
  border-radius: 5px;
`;
export const Thead = styled.thead`
  background-color: #2986cc;
  color: #fff;
`;
export const TrColumn = styled.tr`
  font-size: 20px;
  text-align: center;

  :nth-of-type(even) {
    background-color: #aaaaaa;
  }
`;
export const TdString = styled.td`
  text-align: center;
  padding: 10px;
  width: 300px;
`;
