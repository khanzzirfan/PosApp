import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadTransactionContainer = () => import('containers/Transactions/TransactionContainer' /* webpackChunkName: "budget" */);

class Transaction extends Component {
  render() {
    return <Chunk load={loadTransactionContainer} />;
  }
}

export default Transaction;
