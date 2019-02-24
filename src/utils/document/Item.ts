import * as uuid from 'uuid/v4';

export interface IItem {
  id: string;
  depth: number;
  text: string;
}

export class Item {
  public id: string;

  public depth: number = 0;

  public text: string = '';

  constructor(init?: Partial<IItem>) {
    if (init && init.id) {
      this.id = init.id;
    } else {
      this.id = uuid();
    }

    if (init && init.depth) {
      this.depth = init.depth;
    }

    if (init && init.text) {
      this.text = init.text;
    }
  }

  public toJSON(): IItem {
    return {
      id: this.id,
      depth: this.depth,
      text: this.text,
    };
  }

  public updateText(text: string) {
    this.text = text;
  }

  public indent() {
    if (this.depth < 8) {
      this.depth += 1;
    }
  }

  public unindent() {
    if (this.depth > 0) {
      this.depth -= 1;
    }
  }
}
