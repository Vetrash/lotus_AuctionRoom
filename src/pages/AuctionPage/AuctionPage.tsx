import React from 'react';
import AuctionTable from './components/AuctionTable';
import '../../scss/AuctionPage.scss';

const AuctionPage = () => (
  <div className="container">
    <header className="header">
      Ход торгов
      <strong> Тестовые торги на аппарат Лотос №2033564 (09.11.2020 07:00)</strong>
    </header>
    <div className="info">
      Уважаемые участники, во время вашего хода вы можете
      изменить параметры торгов, указанных в таблице:
    </div>
    <AuctionTable />
  </div>
);

export default AuctionPage;
