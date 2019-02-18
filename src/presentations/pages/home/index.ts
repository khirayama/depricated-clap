import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePage } from 'presentations/components/HomePage';

window.addEventListener('DOMContentLoaded', () => {
  const el: HTMLElement = window.document.querySelector('.application');
  ReactDOM.render(React.createElement(HomePage, window.state), el);
});
