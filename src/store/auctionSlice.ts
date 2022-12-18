/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type user = {
  name: string,
  proposal: {
    events: string,
    productionTime: number,
    warranty: number,
    paymentTerms: number,
    price: string[]
  },
}

type stateType = {
  usersInAuction: user[];
  timer: string;
  idTimers: number;
}

type timerSocket = {
  minutes: string;
  seconds: string;
}

type typeReducer = {auction: stateType};
export const auctionState = (state: typeReducer): stateType => state.auction;

const initialState: stateType = {
  usersInAuction: [],
  timer: '00:00',
  idTimers: 0,
};

const todoSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    addUserByArr(state, action:PayloadAction<user[]>) {
      state.usersInAuction = action.payload;
    },
    updateTime(state, action:PayloadAction<timerSocket>) {
      const { minutes, seconds } = action.payload;
      state.timer = `${minutes} : ${seconds}`;
    },
    updateIdTimer(state) {
      const maxId = state.usersInAuction.length;
      if (state.idTimers + 1 >= maxId) {
        state.idTimers = 0;
        return;
      }
      state.idTimers += 1;
    },
    setIdTimer(state, action:PayloadAction<number>) {
      state.idTimers = action.payload;
    },
  },
});

export const { addUserByArr, updateTime, updateIdTimer, setIdTimer } = todoSlice.actions;
export default todoSlice.reducer;
