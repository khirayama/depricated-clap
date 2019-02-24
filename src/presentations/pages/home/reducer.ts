import * as uuid from 'uuid/v4';

import { actionTypes } from 'presentations/pages/home/actionTypes';
import { IAction, IState } from 'presentations/pages/home/interfaces';
import { Document, IDocument } from 'utils/document/Document';
import { IItem, Item } from 'utils/document/Item';

let doc: Document | null = null;

export function reducer(state: IState, action: IAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));
  const payload: {
    id?: string;
    text?: string;
  } = action.payload;

  switch (action.actionType) {
    case 'INIT': {
      doc = new Document(state.doc);
      break;
    }
    case 'UPDATE_TEXT': {
      const item: Item = doc.find(payload.id);
      item.updateText(payload.text);
      newState.doc = doc.toJSON();
      break;
    }
    default:
  }

  return newState;
}
