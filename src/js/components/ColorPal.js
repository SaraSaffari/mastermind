import React, { Component } from 'react';
import Radium from 'radium'

class ColorPal extends Component {
    render() {
        const {color} = this.props;
        return (
            <div style={[styles.test, {backgroundColor: color}]}>
                {color}
            </div>
        );
    }
}

export default Radium(ColorPal);

let styles = {
    test: {
        color: "#ccc",
    }
}