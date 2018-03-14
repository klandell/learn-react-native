import { constants } from '../config';

const {
  CHANGE_POSITION,
} = constants;

const defaultState = {
  lat: 0,
  lng: 0,
};

export default (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_POSITION: {
      const { lat, lng } = payload;
      return {
        ...state,
        lat,
        lng,
      };
    }
    // as always, return the state
    // when there is no match
    default: {
      return state;
    }
  }
}
