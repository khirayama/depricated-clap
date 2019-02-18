import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import { HomePage, IProps as IHomePageProps } from 'presentations/components/HomePage';
import { generateLayoutProps, ILayoutProps } from 'presentations/utils/generateLayoutProps';

export function homeHandler(req: express.Request, res: express.Response): void {
  const state: IHomePageProps = {};

  const props: ILayoutProps = generateLayoutProps();
  props.path = req.originalUrl;
  props.route = req.route.path;
  props.title = 'clap';
  props.description = 'clap';
  props.keywords = ['clap'].join(',');
  props.image = 'TODO';
  props.scripts = ['/pages/home/bundle.js'];
  props.stylesheets = ['/pages/home/index.css'];
  props.children = renderToString(React.createElement(HomePage, state));
  props.state = state;

  res.send(req.compiledFunction({ props }));
}
