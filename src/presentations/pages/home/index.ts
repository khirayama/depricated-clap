import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePageContainer } from 'presentations/containers/HomePageContainer';
import { IAction, IState } from 'presentations/pages/home/interfaces';
import { reducer } from 'presentations/pages/home/reducer';
import { Provider } from 'utils/Container';
import { Store } from 'utils/Store';

const store: Store<IState, IAction> = new Store(window.state, reducer);
store.dispatch({
  actionType: 'INIT',
  payload: null,
});

window.addEventListener('DOMContentLoaded', () => {
  const el: HTMLElement = window.document.querySelector('.application');
  ReactDOM.render(React.createElement(Provider, { store }, React.createElement(HomePageContainer)), el);
});
