import { categoriesById } from './defaults';

/**
 * Action Constansts
 */
const SUBMIT_RETRIEVE_POSUSER = 'SUBMIT_RETRIEVE_POSUSER';
const FINISH_RETRIEVE_POSUSER = 'FINISH_RETRIEVE_POSUSER';
const ERROR_RETRIEVE_POSUSER  = 'ERROR_RETRIEVE_POSUSER';

/**
 * Actions
 */

/**
 * Reducer
 */
const initialState = {
  menuItems:{},
  isLoading:false,
}

export default function PosReducer(state = initialState, action) {
  //if(action.type === "SUBMIT_RETRIEVE_POSUSER")
  return state;
}
