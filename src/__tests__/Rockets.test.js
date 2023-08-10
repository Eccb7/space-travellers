import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../containers/rockets/Rockets';

test('renders Rockets component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
