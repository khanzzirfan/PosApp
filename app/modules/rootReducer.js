// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.
import PosReducer from 'containers/Pos/reducers/pos-reducer';

import TransactionReducer from 'containers/Transactions/reducer/transaction-reducer';
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
  PosReducer,
  TransactionReducer
});

export default rootReducer;