export type IDispatch = (action: IAction) => void;

export interface IState {
  count: number;
}

export interface IAction {
  actionType: Symbol;
  payload?: any; // tslint:disable-line:no-any
  meta?: any; // tslint:disable-line:no-any
  error?: any; // tslint:disable-line:no-any
}
