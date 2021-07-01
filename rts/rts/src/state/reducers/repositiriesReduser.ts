import { ActionType } from "../action-types";
import { Action } from "../actions";

// reducer updates the data and the has the actions inside of it
// reducer return an object that has data proprty,loading,err
// reducer is alomost thae same concept as the switch statment
interface RepositoriesState {
  loading: boolean;
  error: string | undefined;
  data: string[];
}

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const reducer = (state: RepositoriesState = initialState, action: Action) => {
  switch (action.type) {
    // this case is for a new request(as soon as the user clicks on the search button), so it's time to flip the loading flag to true
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }; //initial state
    // the packag (aka repositiory) that am searching for exist (success), action.payload to load the data -_-
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
