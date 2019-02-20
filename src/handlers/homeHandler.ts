import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as uuid from 'uuid/v4';

import { HomePageContainer } from 'presentations/containers/HomePageContainer';
import { IAction, IState } from 'presentations/pages/home/interfaces';
import { reducer } from 'presentations/pages/home/reducer';
import { generateLayoutProps, ILayoutProps } from 'presentations/utils/generateLayoutProps';
import { Provider } from 'utils/Container';
import { Store } from 'utils/Store';

export function homeHandler(req: express.Request, res: express.Response): void {
  const state: IState = {
    doc: {
      id: uuid(),
      title: 'Document Title',
      items: [
        {
          id: uuid(),
          text: 'First Line',
          depth: 0,
        },
        {
          id: uuid(),
          text: 'Second Line',
          depth: 1,
        },
      ],
    },
  };
  const store: Store<IState, IAction> = new Store(state, reducer);

  const props: ILayoutProps = generateLayoutProps();
  props.path = req.originalUrl;
  props.route = req.route.path;
  props.title = 'clap';
  props.description = 'clap';
  props.keywords = ['clap'].join(',');
  props.image = 'TODO';
  props.scripts = ['/pages/home/bundle.js'];
  props.stylesheets = ['/pages/home/index.css'];
  props.children = renderToString(React.createElement(Provider, { store }, React.createElement(HomePageContainer)));
  props.state = state;

  res.send(req.compiledFunction({ props }));
}
