import {SUBMIT_GET_TRANSACTIONS,
        FINISH_GET_TRANSACTIONS,
        SUBMIT_UPDATE_TRANSACTIONS,
        FINISH_UPDATE_TRANSACTIONS,
        SUBMIT_ADD_TRANSACTIONS,
        FINISH_ADD_TRANSACTIONS
         } from 'containers/Transactions/actions/transaction-action-types';

import transactionsStubData from 'containers/Transactions/data/transaction-data';
import _ from 'lodash';

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
        
        case SUBMIT_ADD_TRANSACTIONS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        
        case FINISH_ADD_TRANSACTIONS: {
            let filteredTransactions = [];
            let menuName = action.transactionItem.menuName;
            let addTransactionItem = state.transactions.filter( e => e.menuName == menuName);
            if(addTransactionItem && addTransactionItem.length > 0){
                addTransactionItem[0].quantity ++;
                let transactionId = addTransactionItem[0].transactionId;
                filteredTransactions = state.transactions.filter( e => e.transactionId !== transactionId);
                filteredTransactions.push(addTransactionItem[0]);
            }

            else {
                filteredTransactions = state.transactions.filter(e => e);
                let maxTranItem = _.maxBy(filteredTransactions, 'transactionId');
                let maxTranId = maxTranItem.transactionId;
                let addTransaction = action.transactionItem;
                addTransaction.transactionId = maxTranId + 1;
                filteredTransactions.push(addTransaction);
            }

            let orderedTransactions = _.orderBy(filteredTransactions, 'transactionId');
            return {
                ...state,
                isLoading: false,
                transactions: orderedTransactions,
            }
        }

        case SUBMIT_UPDATE_TRANSACTIONS:{
            return {
                ...state,
                isLoading: true,
            }
        }

        case FINISH_UPDATE_TRANSACTIONS:{
            let transactionId = action.transactionItem.transactionId;
            let filteredTransactions = state.transactions.filter( e => e.transactionId !== transactionId);
            filteredTransactions.push(action.transactionItem);
            filteredTransactions = _.orderBy(filteredTransactions, ['transactionId']);

            return {
                isLoading: false,
                transactions: filteredTransactions,
            }
        }

        default:
            return state;
    }
}
