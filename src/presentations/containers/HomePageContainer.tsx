import * as React from 'react';

import { HomePage } from 'presentations/components/HomePage';
import { connect, IContainerProps } from 'utils/Container';

// tslint:disable-next-line: variable-name
export const HomePageContainer: React.ComponentClass = connect(
  class extends React.Component<IContainerProps> {
    constructor(props: IContainerProps) {
      super(props);
    }

    public render(): JSX.Element {
      return <HomePage />;
    }
  },
);
