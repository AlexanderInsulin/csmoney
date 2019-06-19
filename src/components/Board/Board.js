import React from 'react'
import styled from 'styled-components'

import List from '../List'

const Layout = styled.div`
    display: flex;
    height: 100%;
`

const BoardWrapper = styled.div`
    flex: 1;

    &:not(:last-child) {
        margin-right: 20px;
    }
`

export default ({ lists, onTaskMove, onTaskDelete, onTaskAdd }) => (
    <Layout>
        {lists.map(list => (
            <BoardWrapper key={list.id}>
                <List
                    list={list}
                    otherLists={lists.filter(b => b !== list)}
                    onTaskMove={onTaskMove}
                    onTaskDelete={onTaskDelete}
                    onTaskAdd={onTaskAdd}
                />
            </BoardWrapper>
        ))}
    </Layout>
)
