import * as React from 'react';

import { connect, IContainerProps } from 'utils/Container';
import { IDocument } from 'utils/document/Document';
import { IItem } from 'utils/document/Item';

export class Paper extends React.Component<{ doc?: IDocument }> {
  public render(): JSX.Element {
    const doc: IDocument = this.props.doc;

    return (
      <div className="Paper">
        <h1>{doc.title}</h1>
        {doc.items.map((item: IItem) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </div>
    );
  }
}

// tslint:disable-next-line: variable-name
export const HomePageContainer: React.ComponentClass = connect(
  class extends React.Component<IContainerProps> {
    public render(): JSX.Element {
      return <Paper doc={this.props.doc} />;
    }
  },
);
