import React from 'react';
import { useSelector } from 'react-redux';
import '../../../scss/AuctionTable.scss';
import Timer from '../../../components/Timer';
import TimerLog from '../../../components/TimerLog';
import { auctionState } from '../../../store/auctionSlice';

const AuctionTable = () => {
  const users = useSelector(auctionState).usersInAuction;
  const { idTimers } = useSelector(auctionState);
  const colorText = ['price-blue', 'price-red', 'price-green'];
  TimerLog();
  return (
    <div className=" table_conteiner">
      <table className="table">
        <thead className="timer-row">
          <tr>
            <td>ХОД</td>
            {users.map((user, i) => {
              if (idTimers === i) { return <td key={user.name}><Timer /></td>; }
              return <td key={user.name} />;
            })}
          </tr>
        </thead>

        <thead className="head">
          <tr>
            <td>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
            {users.map((user) => (
              <td
                key={user.name}
              >
                {user.name}
              </td>
            ))}
          </tr>
        </thead>

        <tbody className="body">
          <tr>
            <td className="align_left">Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
            {users.map((user) => <td key={user.name}>{user.proposal.events}</td>)}
          </tr>

          <tr>
            <td className="align_left">Срок изготовления лота, дней</td>
            {users.map((user) => <td key={user.name}>{user.proposal.productionTime}</td>)}
          </tr>

          <tr>
            <td className="align_left">Гарантийные обязательства, мес</td>
            {users.map((user) => <td key={user.name}>{user.proposal.warranty}</td>)}
          </tr>

          <tr>
            <td className="align_left">Условия оплаты</td>
            {users.map((user) => <td key={user.name}>{`${user.proposal.paymentTerms * 100} %`}</td>)}
          </tr>

          <tr>
            <td className="align_left">Стоимость изготовления лота, руб. (без НДС)</td>
            {users.map(({ name, proposal }) => (
              <td key={name} className="priceConteiner">
                {
                proposal.price.map((price, i) => <div className={colorText[i]}>{`${price} руб.`}</div>)
                }
              </td>
            ))}
          </tr>

          <tr>
            <td className="align_left">Действия</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuctionTable;
