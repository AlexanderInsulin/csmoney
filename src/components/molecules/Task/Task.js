import React from 'react'
import styled from 'styled-components'

import { Card, Action, Dropdown } from '../../atoms'

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

export default ({ title, description, otherBoards, onDelete, onMove }) => (
    <Card>
        <Layout>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Actions>
                <Action type={'danger'} onClick={onDelete}>Удалить</Action>
                <Dropdown items={otherBoards.map(preapareBoard)} onChoose={(item => onMove(item.id))}>
                    <Action type={'secondary'}>Переместить ↓</Action>
                </Dropdown>
            </Actions>
        </Layout>
    </Card>
)