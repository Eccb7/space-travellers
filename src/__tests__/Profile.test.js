import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import redux-mock-store
import Profile from '../containers/profile/Profile';

const mockStore = configureStore(); // Create a mock store instance

test('matches snapshot', () => {
  const store = mockStore({ // Create a mock store with initial state
    rockets: { Data: [] },
    mission: { missions: [] },
  });

  // Render the Profile component within the Provider with the mock store
  const { asFragment } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
