import { setUsers, setUsersError, setUsersFetched } from "./creators";
import fetchUsers from "../../services/fetchUsers";

const usersDispatcher = () => dispatch => {
  fetchUsers()
    .then(users => {
      dispatch(setUsers(users));
      dispatch(setUsersFetched(true));
    })
    .catch(error => {
      dispatch(setUsersError(error));
      dispatch(setUsersFetched(false));
    });
};

export default usersDispatcher;
