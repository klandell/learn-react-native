import { constants } from '../config';

const {
  CHECK_AUTHENTICATED,
  LOGOUT,
} = constants;

const defaultState = {
  isAuthenticated: null,
};

export default (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    // handle the three possible states during the
    // check authenticated process
    case `${CHECK_AUTHENTICATED}_PENDING`: {
      return {
        ...state,
        isAuthenticated: null,
      };
    }
    case `${CHECK_AUTHENTICATED}_SUCCESS`: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case `${CHECK_AUTHENTICATED}_FAILURE`: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    // revoke authentication state when starting
    // the logout process
    case `${LOGOUT}_PENDING`: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    // boot the user out of the app on any
    // unauthorized errors.
    case (type.match(/_FAILURE$/) || {}).input: {
      const status = payload && payload.status;
      if ([401, 403].includes(status)) {
        return {
          ...state,
          isAuthenticated: false,
        };
      }
      return state;
    }
    // as always, return the state
    // when there is no match
    default: {
      return state;
    }
  }
};
