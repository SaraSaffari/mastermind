import React, { Component } from 'react';
import Answer from './Answer';
import UserTries from './UserTries';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			numOfPins: 4,
			colors: ['#f44336', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#cddc39', '#ffeb3b', '#ff9800', '#795548']
		};
	}
	render() {
		const { colors } = this.state;
		return (
			<div className="container-fluid">
				<div class="row">
					<div className="col-sm-3" />
					<div className="col-sm-6">
						<Answer colors={colors} />
						<UserTries colors={colors} />
					</div>
					<div className="col-sm-3" />
				</div>
			</div>
		);
	}
}

export default Layout;
