import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadPosContainer = () => import('containers/Pos/PosContainer' /* webpackChunkName: "budget" */);

class POS extends Component {
  render() {
    return <Chunk load={loadPosContainer} />;
  }
}

export default POS;
