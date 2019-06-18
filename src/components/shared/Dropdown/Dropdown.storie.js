import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Action from '../Action'

import Dropdown from './Dropdown';

const items = [
    { text: 'first', id: 1 },
    { text: 'second', id: 2 },
]

storiesOf('shared/Dropdown', module)
  .add('with action', () => (
    <div>
        <Dropdown items={items} onChoose={action('onChoose')}>
            <Action type={'secondary'}>Переместить ↓</Action>
        </Dropdown>
    </div>
  ))
