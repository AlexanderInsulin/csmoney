import React from 'react'
import styled from 'styled-components'

import { Board } from '../../organisms'

const Layout = styled.div`
    display: flex;
`

const BoardWrapper = styled.div`
    flex: 1;

    &:not(:last-child) {
        margin-right: 20px;
    }
`

export default ({ boards, onTaskMove, onTaskDelete }) => (
    <Layout>
        {boards.map(board => (
            <BoardWrapper key={board.id}>
                <Board
                    board={board}
                    otherBoards={boards.filter(b => b !== board)}
                    onTaskMove={onTaskMove}
                    onTaskDelete={onTaskDelete}
                />
            </BoardWrapper>
        ))}
    </Layout>
)
