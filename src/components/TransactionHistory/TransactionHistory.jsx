import PropTypes from 'prop-types';

import { StyledTransactions } from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTransactions>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTransactions>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['withdrawal', 'payment', 'invoice', 'deposit']),
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};