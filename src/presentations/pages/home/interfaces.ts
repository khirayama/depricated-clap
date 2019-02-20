export type IDispatch = (action: IAction) => void;

import { IDocument } from 'utils/document/Document';

export interface IState {
  doc: IDocument;
}

export interface IAction {
  actionType: Symbol | string;
  payload?: any; // tslint:disable-line:no-any
  meta?: any; // tslint:disable-line:no-any
  error?: any; // tslint:disable-line:no-any
}
