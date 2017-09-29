import React from 'react';
import GatewayRegistry from './GatewayRegistry';
import { instanceOf } from 'prop-types';

export default class GatewayProvider extends React.Component {
  static childContextTypes = {		
    gatewayRegistry: instanceOf(GatewayRegistry).isRequired		
  };

  getChildContext() {
console.error('getChildContext',  this.gatewayRegistry);
    return {
      gatewayRegistry: this.gatewayRegistry
    };
  }

  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = new GatewayRegistry();
console.error('constructor',  this.gatewayRegistry);
  }

  render() {
    return this.props.children;
  }
}
