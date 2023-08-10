import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../containers/profile/Profile';

const mockStore = configureStore();

test('matches snapshot', () => {
  const store = mockStore({
    rockets: { Data: [] },
    mission: { missions: [] },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
