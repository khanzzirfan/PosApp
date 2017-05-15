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
        
        case SUBMIT_UPDATE_TRANSACTIONS:{
            return {
                isLoading: true,
                tranactions: [],
            }
        }

        case FINISH_UPDATE_TRANSACTIONS:{
            let transactionId = action.transactionItem.transactionId;
            let filteredTransactions = transactions.filter( e => e.transactionId !== transactionId);
            filteredTransactions.push(action.transactionItem);

            return {
                isLoading: false,
                tranactions: filteredTransactions,
            }
        }

        default:
            return state;
    }
}
