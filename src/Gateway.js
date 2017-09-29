import React from 'react';
import GatewayRegistry from './GatewayRegistry';
import { instanceOf } from 'prop-types';

export default class Gateway extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  static contextTypes = {		
    gatewayRegistry: instanceOf(GatewayRegistry).isRequired		
  };

  componentWillMount() {
    this.renderIntoGatewayNode(this.props);
  }

  componentWillReceiveProps(props) {
    this.renderIntoGatewayNode(props);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeChild(this.props.into, this.props.id);
  }

  renderIntoGatewayNode(props) {
    this.gatewayRegistry.addChild(props.into, props.children, props.id);
  }

  render() {
    return null;
  }
}
