import * as uuid from 'uuid/v4';

import { IItem, Item } from 'utils/document/Item';

export interface IDocument {
  id: string;
  title: string;
  items: IItem[];
}

export class Document {
  public id: string;

  public title: string = '';

  public items: Item[] = [];

  constructor(init?: Partial<IDocument>) {
    if (init && init.id) {
      this.id = init.id;
    } else {
      this.id = uuid();
    }

    if (init && init.title) {
      this.title = init.title;
    }

    if (init && init.items) {
      this.items = init.items.map((item: IItem) => new Item(item));
    }
  }

  public toJSON(): IDocument {
    return {
      id: this.id,
      title: this.title,
      items: this.items.map((item: Item) => item.toJSON()),
    };
  }

  public find(itemId: string): Item | null {
    for (const item of this.items) {
      if (item.id === itemId) {
        return item;
      }
    }

    return null;
  }
}
