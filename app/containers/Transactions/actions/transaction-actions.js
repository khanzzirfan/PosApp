import {SUBMIT_GET_TRANSACTIONS,
        FINISH_GET_TRANSACTIONS,
        SUBMIT_UPDATE_TRANSACTIONS,
        FINISH_UPDATE_TRANSACTIONS
         } from 'containers/Transactions/actions/transaction-action-types';

function submitGetTransactions() {
    return {
        transactions:[],
        type: SUBMIT_GET_TRANSACTIONS
    }
}

function finishGetTransactions(transactionItems) {
    return {
        transactions: transactionItems,
        type: FINISH_GET_TRANSACTIONS
    }
}

export function getTransactions(){
    return (dispatch, getState) => {
            dispatch(submitGetTransactions());
            dispatch(finishGetTransactions());
    }
}
