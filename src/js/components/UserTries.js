import React, { Component } from 'react';
import UserTry from './UserTry';
import UserInput from './UserInput';

class UserTries extends Component {
	constructor() {
		super();
		this.state = {
			currTries: []
		};
	}
	render() {
		const { colors } = this.props;
		return (
			<div>
				<UserInput colors={colors} />
			</div>
		);
	}
}

export default UserTries;
