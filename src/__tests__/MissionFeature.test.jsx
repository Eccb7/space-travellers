import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionFeature from '../components/missionFeature/MissionFeature';

test('should render MissionFeature correctly when missionReserved is false', () => {
  const props = {
    missionId: '1',
    missionName: 'Mission 1',
    missionDesc: 'Description for Mission 1',
    missionReserved: false,
  };
  const { container } = render(
    <Provider store={store}>
      <MissionFeature
        missionId={props.missionId}
        missionName={props.missionName}
        missionDesc={props.missionDesc}
        missionReserved={props.missionReserved}
      />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
