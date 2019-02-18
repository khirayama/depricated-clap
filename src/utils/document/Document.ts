import * as uuid from 'uuid/v4';

import { IItem, Item } from 'utils/document/Item';

export interface IDocument {
  id: string;
  items: IItem[];
}

export class Document {
  private id: string;

  private items: Item[] = [];

  constructor(init?: Partial<IDocument>) {
    if (init && init.id) {
      this.id = init.id;
    } else {
      this.id = uuid();
    }

    if (init && init.items) {
      this.items = init.items.map((item: IItem) => new Item(item));
    }
  }

  public toJSON(): IDocument {
    return {
      id: this.id,
      items: this.items.map((item: Item) => item.toJSON()),
    };
  }
}
