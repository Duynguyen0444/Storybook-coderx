import React, { Component } from 'react';
import './styles.css';
import PropsTypes from 'prop-types';

// class BooksList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	render() {
// 		const { bookCover, title, updateBook, deleteBook, price, description } = this.props;
// 		return (
// 			<table id="books">
// 				<tr>
// 					<th>Book cover</th>
// 					<th>Title</th>
// 					<th>Dsscription</th>
// 					<th>Price</th>
// 					<th>Action</th>
// 				</tr>
// 				<tr>
// 					<td> {bookCover} </td>
// 					<td> {title} </td>
// 					<td> {description} </td>
// 					<td> {price} </td>
// 					<td>
// 						<button>{updateBook}</button>
// 						<button>{deleteBook}</button>
// 					</td>
// 				</tr>
// 			</table>
// 		);
// 	}
// }
const BooksList = ({ bookCover, title, updateBook, deleteBook, price, description }) => {
	return (
		<table id="books">
			<tr>
				<th>Book cover</th>
				<th>Title</th>
				<th>Dsscription</th>
				<th>Price</th>
				<th>Action</th>
			</tr>
			<tr>
				<td> {bookCover} </td>
				<td> {title} </td>
				<td> {description} </td>
				<td> {price} </td>
				<td>
					<button>{updateBook}</button>
					<button>{deleteBook}</button>
				</td>
			</tr>
		</table>
	);
};

BooksList.propsTypes = {
	bookCover: PropsTypes.string,
	title: PropsTypes.string,
	price: PropsTypes.number,
	updateBook: PropsTypes.string,
	deleteBook: PropsTypes.string,
};

export default BooksList;
