import React from 'react';
import { storiesOf } from '@storybook/react';
import Action from '../Action'

import Dropdown from './Dropdown';

const items = [
    { text: 'first', action: () => { alert('first') } },
    { text: 'second', action: () => { alert('second') } },
]

storiesOf('atoms/Dropdown', module)
  .add('with text', () => (
    <div>
        <Dropdown items={items}>
            <Action type={'secondary'}>Переместить ↓</Action>
        </Dropdown>
    </div>
  ))
