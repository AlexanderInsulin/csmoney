import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import List from './List';

const list = {
    id: 1,
    name: 'To Do',
    tasks: [
        { id: 1, name: '1', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 2, name: 'бВГ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 3, name: 'Вгд', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 4, name: 'гЯу', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 5, name: 'гяу', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 6, name: 'ГЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 7, name: 'яЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        { id: 8, name: 'ЯЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
    ]
}

storiesOf('List', module)
  .add('Simple list', () => (
    <div style={{ width: '280px', height: '300px' }}>
        <List
            list={list}
            otherLists={ [ { id: 2, name: 'asd' } ]}
            onTaskMove={action('onTaskMove')}
            onTaskDelete={action('onTaskDelete')}
            onTaskAdd={action('onTaskAdd')}
        />
    </div>
  ))
