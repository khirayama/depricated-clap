import * as uuid from 'uuid/v4';

import { actionTypes } from 'presentations/pages/home/actionTypes';
import { IAction, IState } from 'presentations/pages/home/interfaces';
import { Document, IDocument } from 'utils/document/Document';

let doc: Document | null = null;

export function reducer(state: IState, action: IAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));
  const payload: {} = action.payload;

  switch (action.actionType) {
    case 'INIT': {
      doc = new Document(state.doc);
      break;
    }
    default:
  }

  return newState;
}
