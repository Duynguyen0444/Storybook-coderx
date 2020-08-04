import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { users, books, transactions } = this.props;
		return (
			<ul>
				<li>
					<a class="active" href="#home">
						Bookstore
					</a>
				</li>
				<li>
					<a href="#"> {users} </a>
				</li>
				<li>
					<a href="#"> {books} </a>
				</li>
				<li>
					<a href="#"> {transactions} </a>
				</li>
			</ul>
		);
	}
}

NavBar.propsTypes = {
	users: PropTypes.string,
	books: PropTypes.string,
	transactions: PropTypes.string,
};

export default NavBar;
