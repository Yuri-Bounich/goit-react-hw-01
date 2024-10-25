import s from './TransactionHistory.module.css';
import clsx from 'clsx';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.tr} key={item.id}>
            <td className={clsx(s.td, s.tdpadding)}>{item.type}</td>
            <td className={clsx(s.td, s.tdcenter)}>{item.amount}</td>
            <td className={clsx(s.td, s.tdcenter)}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
