import React, { useState } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Action from '../Action'
import Dropdown from '../Dropdown'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`


const Title = styled.h4`
    all: unset;
    font-weight: 900;
    font-size: 16px;
    margin: 0 0 10px 0;
`

const Description = styled.div`
    all: unset;
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

const ViewContent = ({ title, description, otherBoards, onDelete, onMove }) => (
    <React.Fragment>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Actions>
            <Action type={'danger'} onClick={onDelete}>Удалить</Action>
            <Dropdown items={otherBoards.map(preapareBoard)} onChoose={(item => onMove(item.id))}>
                <Action type={'secondary'}>Переместить ↓</Action>
            </Dropdown>
        </Actions>
    </React.Fragment>
)

const EditContent = ({ title, description, setTitle, setDescription, onSave }) => (
    <React.Fragment>
        <Title
            as='input'
            value={title}
            placeholder='Title'
            onChange={e => setTitle(e.target.value)}
        />
        <Description
            as='textarea'
            value={description}
            placeholder='Description'
            onChange={e => setDescription(e.target.value)}
        />
        <Actions>
           <Action type={'succeed'} onClick={onSave}>Сохранить</Action>
        </Actions>
    </React.Fragment>
)

export default ({ editMode, title: initialTitle, description: initialDesctiption, otherBoards, onDelete, onMove, onSave }) =>{
    const [title, setTitle] = useState(initialTitle)
    const [description, setDescription] = useState(initialDesctiption)

    return (
        <Card>
            <Layout>
            { editMode
                ? <EditContent {...{ title, setTitle, description, setDescription, onSave: () => onSave({ title, description }) }}/>
                : <ViewContent {...{ title, description, otherBoards, onDelete, onMove }}/>
            }
            </Layout>
        </Card>
    )
}
