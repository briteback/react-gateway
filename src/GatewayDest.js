import React from 'react';
import GatewayRegistry from './GatewayRegistry';

export default class GatewayDest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  state = {
    children: null // array of children
  };

  componentWillMount() {
    this.gatewayRegistry.addContainer(this.props.name, this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer(this.props.name, this);
  }

  render() {
    const { component, tagName, ...attrs } = this.props;
    delete attrs.name;
    return React.createElement(component || 'div', attrs, this.state.children); // this is now an array of children
  }
}
