import { configureStore } from '@reduxjs/toolkit';
import auctionReduser from './auctionSlice';

export default configureStore({ reducer: { auction: auctionReduser } });
