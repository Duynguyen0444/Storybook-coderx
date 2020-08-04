import React from 'react';
import { storiesOf } from '@storybook/react';
import AddBook from '../src/Components/AddBook/AddBook';

storiesOf('AddBook', module)
    .add('Default', () => <AddBook />)
    .add('Secondversion', () => <AddBook />)