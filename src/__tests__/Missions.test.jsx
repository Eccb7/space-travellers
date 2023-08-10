import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import Missions from '../containers/missions/Missions';

const mockStore = configureStore();

test('matches snapshot', () => {
  const initialState = {
    mission: {
      loading: false,
      missions: [
        {
          mission_id: 'mission1',
          mission_name: 'Mission 1',
          description: 'Mission 1 description',
          reserved: false,
        },
        {
          mission_id: 'mission2',
          mission_name: 'Mission 2',
          description: 'Mission 2 description',
          reserved: true,
        },
      ],
      error: '',
    },
  };

  const store = mockStore(initialState);

  const { container, getByText } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('Mission 1 description')).toBeInTheDocument();
  expect(getByText('Mission 2')).toBeInTheDocument();
  expect(getByText('Mission 2 description')).toBeInTheDocument();
});
