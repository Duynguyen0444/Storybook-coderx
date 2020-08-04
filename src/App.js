import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import UsersList from './Components/UsersList/UsersList';
import BooksList from './Components/BooksList/BooksList';
import AddUser from './Components/AddUser/AddUser';
import AddBook from './Components/AddBook/AddBook';
import avatar from './Img/man-1.svg';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<NavBar users="Users" books="Books" transactions="Transactions" />

				<UsersList avatar="Avatar" username="Username" updateUser="Update" deleteUser="Delete" />

				<BooksList
					description="description"
					bookCover="Avatar"
					title="Book A"
					price={90}
					updateBook="Update"
					deleteBook="Delete"
				/>

				<AddUser />
				<AddBook />
			</div>
		);
	}
}

export default App;
