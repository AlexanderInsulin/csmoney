import React from 'react'
import styled from 'styled-components'

import Board from '../List'

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

export default ({ boards, onTaskMove, onTaskDelete, onTaskAdd }) => (
    <Layout>
        {boards.map(board => (
            <BoardWrapper key={board.id}>
                <Board
                    board={board}
                    otherBoards={boards.filter(b => b !== board)}
                    onTaskMove={onTaskMove}
                    onTaskDelete={onTaskDelete}
                    onTaskAdd={onTaskAdd}
                />
            </BoardWrapper>
        ))}
    </Layout>
)
