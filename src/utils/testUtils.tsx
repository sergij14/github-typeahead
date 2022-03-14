import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '../styles';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, Store, EmptyObject} from 'redux';
import reducers from '../state/reducers';
import {UserState} from '../state/reducers/types';
import {Action} from '../state/actions/types';
import userEvent from '@testing-library/user-event';

export function createTestStore() {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
}

export type StoreType = Store<
  EmptyObject & {
    user: UserState;
  },
  Action
> & {
  dispatch: unknown;
};

export function renderComponent (render: () => JSX.Element, store: StoreType) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {render()}
      </ThemeProvider>
    </Provider>
  );
};

export function typeInField (inputToType: HTMLElement, value: string) {
  userEvent.type(inputToType, `${value}`);
}