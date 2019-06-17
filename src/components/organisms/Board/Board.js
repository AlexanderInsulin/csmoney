import React, { useState } from 'react'
import styled from 'styled-components'

import { Column } from '../../atoms'
import { BoardInfo, Task } from '../../molecules'

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

export default ({ board, otherBoards, onTaskMove, onTaskDelete }) => {
    const [direction, setDirection] = useState('down')

    const changeSort = () => {
        if (direction === 'down') setDirection('up')
        else setDirection('down')
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
                />
            }
        >
        {prepearedTasks.map(task =>
            <ItemWrapper key={task.id}>
                <Task
                    title={task.name}
                    description={task.description}
                    otherBoards={otherBoards}
                    onMove={(boardId) => onTaskMove({ boardId, taskId: task.id})}
                    onDelete={() => onTaskDelete({ boardId: board.id, taskId: task.id})}
                />
            </ItemWrapper>
        )}
        </Column>
    )
}