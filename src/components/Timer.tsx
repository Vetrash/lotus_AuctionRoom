import React from 'react';
import { useSelector } from 'react-redux';
import '../scss/Timer.scss';
import { auctionState } from '../store/auctionSlice';

const Timer = () => {
  const { timer } = useSelector(auctionState);
  return (
    <div className="timer">{timer}</div>
  );
};

export default Timer;
