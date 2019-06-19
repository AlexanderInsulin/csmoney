import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import ListHeader from './ListHeader';

storiesOf('List/ListHeader', module)
  .add('with text', () => (
    <div style={{ width: '280px' }}>
        <ListHeader
            name={text('name', 'To Do')}
            sorting={text('sorting', 'sort (A-я)')}
            onChangeSort={action('onChangeSort')}
            onAddingTask={action('onAddingTask')}
        />
    </div>
  ))
