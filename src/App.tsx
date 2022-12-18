import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AuctionPage from './pages/AuctionPage/AuctionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { addUserByArr } from './store/auctionSlice';
import { getArrUsers } from './data/dataUsers';

const App = () => {
  const dispatch = useDispatch();
  const listUser = getArrUsers();
  dispatch(addUserByArr(listUser));

  return (
    <Routes>
      <Route>
        <Route path="/" element={<AuctionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
