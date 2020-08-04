import React from 'react';
import { storiesOf } from '@storybook/react';
import UsersList from '../src/Components/UsersList/UsersList';

storiesOf('UsersList', module)
	.add('Default', () => (
		<UsersList avatar="Avatar" username="Username" updateUser="Update" deleteUser="Delete" />
));
