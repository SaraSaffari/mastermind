import React, { Component } from 'react';
import ColorPal from './ColorPal';

class UserInput extends Component {
    render() {
        const {colors} = this.props;
        const colorPallet = colors.map((color, i) => {
            console.log("2", i, color);
            return <ColorPal key={i} color={color} />
        })
        console.log(colors);
        return (
            <div>
                {colorPallet}
            </div>
        );
    }
}

export default UserInput;