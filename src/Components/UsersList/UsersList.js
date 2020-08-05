import React, { Component } from 'react';
import './styles.css';
import PropsTypes from 'prop-types';

// class UsersList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	render() {
// 		const { avatar, username, updateUser, deleteUser } = this.props;
// 		return (
// 			<table id="customers">
// 				<tr>
// 					<th>Avatar</th>
// 					<th>Username</th>
// 					<th>Action</th>
// 				</tr>
// 				<tr>
// 					<td> {avatar} </td>
// 					<td> {username} </td>
// 					<td>
// 						<button>{updateUser}</button>
// 						<button>{deleteUser}</button>
// 					</td>
// 				</tr>
// 			</table>
// 		);
// 	}
// }

const UsersList = ({ avatar, username, updateUser, deleteUser }) => {
	return (
		<table id="customers">
			<tr>
				<th>Avatar</th>
				<th>Username</th>
				<th>Action</th>
			</tr>
			<tr>
				<td> {avatar} </td>
				<td> {username} </td>
				<td>
					<button>{updateUser}</button>
					<button>{deleteUser}</button>
				</td>
			</tr>
		</table>
	);
};

UsersList.propsTypes = {
	avatar: PropsTypes.string,
	username: PropsTypes.string,
	updateBook: PropsTypes.string,
	deleteBook: PropsTypes.string,
};

export default UsersList;
