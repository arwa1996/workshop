import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { async } from "q";
import { Dispatch } from "redux";

export const searchRepositories = (term: string) => {
  return async(async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const name = data.objects.map((result: any) => {
        return result.packag.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: name,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  });
};
