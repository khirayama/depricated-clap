import * as React from 'react';

import { connect, IContainerProps } from 'utils/Container';
import { IDocument } from 'utils/document/Document';
import { IItem } from 'utils/document/Item';

interface ILineProps {
  item: IItem;
  onInput?(event: React.FormEvent<HTMLInputElement>, props: ILineProps): void;
}

export class Line extends React.Component<ILineProps> {
  constructor(props: ILineProps) {
    super(props);

    this.onInput = this.onInput.bind(this);
  }

  public render(): JSX.Element {
    const item: IItem = this.props.item;

    return (
      <div className="Line">
        <span className="Line--Text" contentEditable onInput={this.onInput}>
          {item.text}
        </span>
      </div>
    );
  }

  private onInput(event: React.FormEvent<HTMLSpanElement>): void {
    console.log(event.currentTarget);
  }
}

interface IPaperProps {
  doc?: IDocument;
  onChangeLine?(event: React.FormEvent<HTMLInputElement>, lineProps: ILineProps): void;
}

export class Paper extends React.Component<IPaperProps> {
  constructor(props: IPaperProps) {
    super(props);

    this.onInput = this.onInput.bind(this);
  }

  public render(): JSX.Element {
    const doc: IDocument = this.props.doc;

    return (
      <>
        <h1>{doc.title}</h1>
        <div className="Paper" contentEditable onInput={this.onInput}>
          {doc.items.map((item: IItem) => (
            <Line key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  }

  private onInput(event: React.FocusEvent<HTMLDivElement>): void {
    // console.log(event.currentTarget);
    // console.log(event.target);
  }
}

// tslint:disable-next-line: variable-name
export const HomePageContainer: React.ComponentClass = connect(
  class extends React.Component<IContainerProps> {
    constructor(props: IContainerProps) {
      super(props);

      this.onChangeLine = this.onChangeLine.bind(this);
    }

    public render(): JSX.Element {
      return <Paper doc={this.props.doc} onChangeLine={this.onChangeLine} />;
    }

    private onChangeLine(event: React.FormEvent<HTMLInputElement>, lineProps: ILineProps): void {
      const value: string = event.currentTarget.value;
      this.props.dispatch({
        actionType: 'UPDATE_TEXT',
        payload: {
          id: lineProps.item.id,
          text: value,
        },
      });
    }
  },
);
