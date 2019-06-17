import React from 'react'
import styled from 'styled-components'

import { Action } from '../../atoms'

const Layout = styled.section`
    position: relative;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const Row = styled.div`
    display: flex;
    justify-content: center;

    &:not(:last-child) {
        margin-bottom: 10px
    }
`

const Name = styled.h2`
    all: unset;
`

const Sorting = styled(Action)`
    position: absolute;
    right: 10px
    align-self: flex-end;
`


export default ({ name, sorting, onChangeSort, onAddingTask }) => (
    <Layout>
        <Row>
            <Name>{name}</Name>
            {sorting && 
                <Sorting type={'succeed'} onClick={onChangeSort}>
                    {sorting}
                </Sorting>
            }
        </Row>
        <Row>
            <Action type={'primary'} underline onClick={onAddingTask}>
                Добавить задачу
            </Action>
        </Row>
    </Layout>
)