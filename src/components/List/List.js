import React, { useState } from 'react'

import { Column } from '../shared'
import ListHeader from './ListHeader'
import ListBody from './ListBody'

const sortStirng = (a, b) => a.localeCompare(b, { kf: 'upper' }, { sensitivity: 'variant' })

export const sorts = {
    'down': {
        text: 'sort (A-я)',
        compareFunction: (a, b) => sortStirng(a.name, b.name)
    },
    'up': {
        text: 'sort (я-А)',
        compareFunction: (a, b) => sortStirng(b.name, a.name)
    },
}

export default ({ list, otherLists, onTaskMove, onTaskDelete, onTaskAdd, onTaskUpdate }) => {
    const [direction, setDirection] = useState('down')

    const changeSort = () => {
        if (direction === 'down') setDirection('up')
        else setDirection('down')
    }

    const prepearedTasks = list.tasks
        .sort(sorts[direction].compareFunction)

    return(
        <Column>
            <ListHeader
                name={list.name}
                sorting={sorts[direction].text}
                onChangeSort={changeSort}
                onAddingTask={() => onTaskAdd(list.id)}
            />
            <ListBody
                tasks={prepearedTasks}
                otherLists={otherLists}
                onMove={(taskId, listId) => onTaskMove(list.id, taskId, listId)}
                onDelete={(taskId) => onTaskDelete(taskId, list.id)}
                onTitleChange={(taskId, value) => onTaskUpdate(list.id, taskId, { name: value })}
                onDescriptionChange={(taskId, value) => onTaskUpdate(list.id, taskId, { description: value })}
            />
        </Column>
    )
}