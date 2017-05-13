// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.
import PosReducer from 'containers/Pos/reducers/pos-reducer';
import { combineReducers } from 'redux';

/**
 * Routing to be implemented
 */
// export default {
//   nothing: () => ({
//     PosReducer
//   }),
// };
//combineReducers

const rootReducer = ({
  PosReducer
});

export default rootReducer;