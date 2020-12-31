import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import {counterReducer} from './features/counter/counterSlice';

const AppReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof AppReducer>;

export default (state: any, action: AnyAction) => {
  return AppReducer(state, action);
};
