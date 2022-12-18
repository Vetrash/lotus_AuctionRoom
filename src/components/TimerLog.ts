import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateIdTimer, updateTime, setIdTimer } from '../store/auctionSlice';
import '../scss/Timer.scss';

const TimerLog = () => {
  const startTimerDate = new Date(2022, 11, 18, 0, 0, 0, 0).getTime();
  const startMin = '02';
  const startSec = '00';
  const lengthTimer = 2 * 60 * 1000;
  const dispatch = useDispatch();

  const getTimeObj = (timeFull: number) => {
    const time = timeFull / 1000;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const checkminutes = String(minutes).length === 1 ? `0${minutes}` : String(minutes);
    const checkSeconds = String(seconds).length === 1 ? `0${seconds}` : String(seconds);
    return { minutes: checkminutes, seconds: checkSeconds };
  };

  const startingTime = () => {
    const deltaTime = Date.now() - startTimerDate;
    const sumShift = Math.floor(deltaTime / (lengthTimer));
    const restTimer = (lengthTimer) - (deltaTime % (lengthTimer));
    const indexUser = sumShift % 4;
    dispatch(setIdTimer(indexUser));
    dispatch(updateTime(getTimeObj(restTimer)));
  };

  const startTimer = () => {
    setInterval(() => {
      const deltaTime = Date.now() - startTimerDate;
      const restTimer = (lengthTimer) - (deltaTime % (lengthTimer));
      if (restTimer <= 1000) {
        dispatch(updateIdTimer());
        dispatch(updateTime({ minutes: startMin, seconds: startSec }));
        return;
      }
      dispatch(updateTime(getTimeObj(restTimer)));
    }, 1000);
  };

  useEffect(() => {
    startingTime();
    startTimer();
  }, []);
};

export default TimerLog;
