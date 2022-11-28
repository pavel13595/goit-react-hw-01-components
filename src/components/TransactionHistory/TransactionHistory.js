import PropTypes from 'prop-types';
import {
  TransactionHistoryTb,
  Thead,
  TrColumn,
  TdString,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTb>
      <Thead>
        <TrColumn>
          <TdString>Type</TdString>
          <TdString>Amount</TdString>
          <TdString>Currency</TdString>
        </TrColumn>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrColumn key={id}>
            <TdString>{type}</TdString>
            <TdString>{amount}</TdString>
            <TdString>{currency}</TdString>
          </TrColumn>
        ))}
      </tbody>
    </TransactionHistoryTb>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
