import React, { Component } from 'react';

class CalculatorKey extends Component {
    render() {
      const { onPress, className, ...props } = this.props
      
      return (
          <button onClick={onPress} className={`calculator-key ${className}`} {...props}/>
      )
    }
  }

  export default CalculatorKey