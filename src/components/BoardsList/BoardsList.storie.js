import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BoardsList from './BoardsList';

const boards = [
    {
        id: 1,
        name: 'To Do',
        tasks: [
            { id: 1, name: 'Абв', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 2, name: 'бВГ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 3, name: 'Вгд', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 4, name: 'гЯу', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 5, name: 'гяу', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 6, name: 'ГЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 7, name: 'яЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
            { id: 8, name: 'ЯЯУ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        ]
    },
    {
        id: 2,
        name: 'In progress',
        tasks: [
            { id: 9, name: 'Абв', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        ]
    },
    {
        id: 3,
        name: 'Done',
        tasks: [
            { id: 10, name: 'Абв', description: 'Нужно пойти на работу и попробовать закончить начатое' },
        ]
    }
]

storiesOf('templates/BoardsList', module)
  .add('with text', () => (
    <div>
        <BoardsList
            boards={boards}
            onTaskMove={action('actiononTaskMove')}
            onTaskDelete={action('onTaskDelete')}
        />
    </div>
  ))
