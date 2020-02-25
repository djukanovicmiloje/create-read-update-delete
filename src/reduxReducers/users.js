import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_FETCHED
} from "../actions/fetchUsers/types";

const usersReducer = (
  state = {
    areUsersFetched: false,
    users: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case SET_USERS_FETCHED:
      return {
        ...state,
        areUsersFetched: action.areUsersFetched
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_USERS_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default usersReducer;
