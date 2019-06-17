import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import BoardInfo from './BoardInfo';

storiesOf('molecules/BoardInfo', module)
  .add('with text', () => (
    <div style={{ width: '280px' }}>
        <BoardInfo
            name={text('name', 'To Do')}
            sorting={text('sorting', 'sort (A-я)')}
            onChangeSort={action('onChangeSort')}
            onAddingTask={action('onAddingTask')}
        />
    </div>
  ))
