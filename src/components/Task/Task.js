import React from 'react'
import styled from 'styled-components'

import { Action, Dropdown, Card, Editable } from '../shared'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled(Editable)`
    font-weight: 900;
    font-size: 16px;
    margin: 0 0 10px 0;
`

const Description = styled(Editable)`
    font-size: 14px;
    margin: 0 0 10px 0;
`

const Actions = styled.div`
    display: flex;

    & > *:not(:last-child) {
        margin-right: 5px;
    }
`

const preapareBoard = (board) => ({ id: board.id, text: board.name })

export default ({ editMode, title, description, otherBoards, onDelete, onMove, onTitleChange, onDescriptionChange }) => (
    <Card>
        <Layout>
            <Title text={title} tagName='h4' onChange={onTitleChange} />
            <Description text={description} onChange={onDescriptionChange} />
            <Actions>
                <Action type={'danger'} onClick={onDelete}>Удалить</Action>
                <Dropdown items={otherBoards.map(preapareBoard)} onChoose={(item => onMove(item.id))}>
                    <Action type={'secondary'}>Переместить ↓</Action>
                </Dropdown>
            </Actions>
        </Layout>
    </Card>
)
