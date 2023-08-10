import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import missionReducer, { fetchMissions, joinMission, LeaveMission } from '../redux/missions/missionSlice';

describe('missionSlice', () => {
  const initialState = {
    loading: false,
    error: '',
    missions: [],
  };
  const mockStore = configureMockStore([thunk]);

  it('should handle fetchMissions', async () => {
    const mockAxios = new MockAdapter(axios);
    const mockResponse = [
      {
        mission_id: 'mission1',
        mission_name: 'Mission 1',
        description: 'Mission 1 description',
        reserved: false,
      },
    ];
    mockAxios.onGet('https://api.spacexdata.com/v3/missions').reply(200, mockResponse);

    const store = mockStore({ mission: initialState });

    const expectedActions = [
      { type: 'mission/fetchMissions/pending' },
      { type: 'mission/fetchMissions/fulfilled', payload: mockResponse },
    ];

    await store.dispatch(fetchMissions());

    const dispatchedActions = store.getActions().map((action) => ({
      type: action.type,
      payload: action.payload,
    }));
    expect(dispatchedActions).toEqual(expectedActions);
    expect(store.getState().mission.error).toEqual('');
  });

  it('should handle joinMission', () => {
    const initialState = {
      loading: false,
      error: '',
      missions: [{ mission_id: '1', reserved: false }],
    };
    const action = joinMission('1');
    const newState = missionReducer(initialState, action);

    expect(newState.missions[0].reserved).toBe(true);
  });

  it('should handle LeaveMission', () => {
    const initialState = {
      loading: false,
      error: '',
      missions: [{ mission_id: '1', reserved: true }],
    };
    const action = LeaveMission('1');
    const newState = missionReducer(initialState, action);

    expect(newState.missions[0].reserved).toBe(false);
  });
});
