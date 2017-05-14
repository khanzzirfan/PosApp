import {SUBMIT_GET_TRANSACTIONS,
        FINISH_GET_TRANSACTIONS,
        SUBMIT_UPDATE_TRANSACTIONS,
        FINISH_UPDATE_TRANSACTIONS
         } from 'containers/Transactions/actions/transaction-action-types';

import transactionsStubData from 'containers/Transactions/data/transaction-data';

const initialState ={
    transactions: [],
    isLoadingTransactions:false,
}

export default function TransactionReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_GET_TRANSACTIONS:
            return {
               ...state,
               isLoading:true
            }

        case FINISH_GET_TRANSACTIONS:
            return {
                isLoading:false,
                transactions: transactionsStubData,
            }

        default:
            return state;
    }
}
