import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


import ListBody from './ListBody';

const tasks = [
    { id: 1, name: 'Абв', description: 'Нужно пойти на работу и попробовать закончить начатое' },
    { id: 2, name: 'бВГ', description: 'Нужно пойти на работу и попробовать закончить начатое' },
    { id: 3, name: 'Вгд', description: 'Нужно пойти на работу и попробовать закончить начатое' },
]

const otherLists = [
    { id: 1, name: 'qwer' },
    { id: 2, name: 'zxcv' },
]

storiesOf('List/ListBody', module)
    .add('with text', () => (
        <div style={{ width: '400px', height: '300px' }}>
            <ListBody
                tasks={object('tasks', tasks)}
                otherLists={object('otherLists', otherLists)}
                onMove={action('onMove')}
                onDelete={action('onDelete')}
                onTitleChange={action('onTitleChange')}
                onDescriptionChange={action('onDescriptionChange')}
            />
        </div>
    ))
