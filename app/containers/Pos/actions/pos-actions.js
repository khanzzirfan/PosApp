import {SUBMIT_LOADMENUITEMS,
        FINISH_LOADMENUITEMS } from 'containers/Pos/actions/pos-action-types';

import {menuItemObject} from 'containers/Pos/stubdata/stubdata';

function submitMenuItems() {
    return {
        menuItems: {},
        type: SUBMIT_LOADMENUITEMS
    }
}

function finishLoadMenuItems(menuItems) {
    return {
        menuItems: menuItems,
        type: FINISH_LOADMENUITEMS
    }
}

export function getmenuitems(){
    return (dispatch, getState) => {
            dispatch(submitMenuItems());
            dispatch(finishLoadMenuItems());
    }
}

