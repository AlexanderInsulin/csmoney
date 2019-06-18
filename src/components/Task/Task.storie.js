import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, array } from '@storybook/addon-knobs';

import Task from './Task';



storiesOf('molecules/Task', module)
  .add('with text', () => (
    <div style={{ width: '280px' }}>
        <Task
            title={text('title', 'Сделать всю работу')}
            description={text('description', 'Нужно пойти на работу и попробовать закончить начатое')}
            otherBoards={array('otherBoards', [ {id: 1, name: 'qwer'}, {id: 2, name: 'zxc'} ])}
            onDelete={action('onDelete')}
            onMove={action('onMove')}
        />
    </div>
  ))
