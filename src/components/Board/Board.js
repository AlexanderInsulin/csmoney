import React from 'react'
import styled from 'styled-components'

import List from '../List'

const Layout = styled.div`
    display: flex;
    height: 100%;
`

const ListWrapper = styled.div`
    flex: 1;

    &:not(:last-child) {
        margin-right: 20px;
    }
`

export default ({ lists, onTaskMove, onTaskDelete, onTaskAdd, onTaskUpdate }) => (
    <Layout>
        {lists.map(list => (
            <ListWrapper key={list.id}>
                <List
                    list={list}
                    otherLists={lists.filter(b => b !== list)}
                    onTaskMove={onTaskMove}
                    onTaskDelete={onTaskDelete}
                    onTaskAdd={onTaskAdd}
                    onTaskUpdate={onTaskUpdate}
                />
            </ListWrapper>
        ))}
    </Layout>
)
