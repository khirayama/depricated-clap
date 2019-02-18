import { actionTypes } from 'presentations/pages/home/actionTypes';
import { IAction, IState } from 'presentations/pages/home/interfaces';

export function reducer(state: IState, action: IAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));
  const payload: {} = action.payload;

  return newState;
}
