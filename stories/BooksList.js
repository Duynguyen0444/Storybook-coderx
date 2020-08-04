import React from 'react';
import { storiesOf } from '@storybook/react';
import BooksList from '../src/Components/BooksList/BooksList';

storiesOf('BooksList', module).add('Default', () => (
	<BooksList
		description="description"
		bookCover="Avatar"
		title="Book A"
		price={90}
		updateBook="Update"
		deleteBook="Delete"
	/>
));
