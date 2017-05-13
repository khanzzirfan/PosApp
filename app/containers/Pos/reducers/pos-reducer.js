import {SUBMIT_LOADMENUITEMS,
        FINISH_LOADMENUITEMS
    } from 'containers/Pos/actions/pos-action-types';

import {menuItemObject} from 'containers/Pos/stubdata/stubdata';

/**
 * Reducer
 */
const initialState = {
  menuItems:{},
  isLoading:false,
}

export default function PosReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_LOADMENUITEMS:
            return {
               ...state,
               isLoading:true
            };

        case FINISH_LOADMENUITEMS:
            return {
                isLoading:false,
                menuItems: menuItemObject,
            }
        default:
            return state;
    }
}
