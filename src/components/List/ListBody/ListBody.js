import React from 'react'
import styled from 'styled-components'
import Task from '../../Task'

const Layout = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`

const ItemWrapper = styled.div`
    margin: 0px 10px 20px;
`

export default ({ tasks, name, otherLists, onMove, onDelete, onTitleChange, onDescriptionChange }) => (
    <Layout>
        {tasks.map(task =>
            <ItemWrapper key={task.id}>
                <Task
                    done={name === 'Done'}
                    title={task.name}
                    description={task.description}
                    otherLists={otherLists}
                    onMove={(listId) => onMove(task.id, listId)}
                    onDelete={() => onDelete(task.id)}
                    onTitleChange={(value) => onTitleChange(task.id, value)}
                    onDescriptionChange={(value) => onDescriptionChange(task.id, value)}
                />
            </ItemWrapper>
        )}
    </Layout>
)