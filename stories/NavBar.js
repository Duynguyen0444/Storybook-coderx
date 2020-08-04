import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../src/Components/Navbar/NavBar'

storiesOf('NavBar', module)
  .add('Default', () => (
    <NavBar users="Users" books="Books" transactions="Transactions" />
  ));
