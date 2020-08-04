import React, { Component } from 'react';
import './styles.css';

class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<form>
				<label for="email">Email</label>
				<input type="text" id="email" name="email" placeholder="Email" />

				<label for="name">Name</label>
				<input type="text" id="name" name="name" placeholder="Name" />

				<label for="password">Password</label>
				<input type="password" id="password" name="password" placeholder="Password" />

				<input type="submit" value="Create user" />
			</form>
		);
	}
}

export default AddUser;
