import React, { useState } from 'react'
import styled from 'styled-components'

import Column from '../Column'
import BoardInfo from '../BoardInfo'
import Task from '../Task'

const sortStirng = (a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
}

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

const ItemWrapper = styled.div`
    margin: 0px 10px 20px;
`

export default ({ board, otherBoards, onTaskMove, onTaskDelete, onTaskAdd }) => {
    const [direction, setDirection] = useState('down')
    const [addTask, setAddTask] = useState(false)

    const changeSort = () => {
        if (direction === 'down') setDirection('up')
        else setDirection('down')
    }

    const onSave = ({ title, description, id }) => {
        if (!title.length || !description.length) return
        
        setAddTask(false)
        if (id) {
            return
        }
        onTaskAdd({
            taskName: title,
            taskDescription: description,
            boardId: board.id
        })
    }

    const prepearedTasks = board.tasks
        .sort(sorts[direction].compareFunction)

    return(
        <Column
            header={
                <BoardInfo
                    name={board.name}
                    sorting={sorts[direction].text}
                    onChangeSort={changeSort}
                    onAddingTask={() => {setAddTask(true)}}
                />
            }
        >
        {addTask && (
            <ItemWrapper key={'none'}>
                <Task
                    editMode
                    title=''
                    description=''
                    onSave={onSave}
                />
            </ItemWrapper>
        )}
        {prepearedTasks.map(task =>
            <ItemWrapper key={task.id}>
                <Task
                    title={task.name}
                    description={task.description}
                    otherBoards={otherBoards}
                    onSave={onSave}
                    onMove={(boardId) => onTaskMove({ boardId, taskId: task.id, fromBoardId: board.id })}
                    onDelete={() => onTaskDelete({ boardId: board.id, taskId: task.id})}
                />
            </ItemWrapper>
        )}
        </Column>
    )
}