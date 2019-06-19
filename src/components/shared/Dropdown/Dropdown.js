import React from 'react'
import styled from 'styled-components'

const DropdownItem = styled.li`
    color: #bdb9b9;
    font-size: 14px;
    cursor: pointer;
`

const DropdownContent = styled.ul`
    display: none;
    position: absolute;
    background: white;
    padding: 10px 15px 10px 10px;
    list-style-type: none;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: 0 0 12px #eeeeee;
`

const Layout = styled.div`
    position: relative;
    width: fit-content
    
    &:hover ${DropdownContent}:not(:empty) {
        display: block;
    }
`

export default ({ children, items = [], keyName = 'id', textName = 'text', onChoose }) => (
    <Layout>
        {children}
        <DropdownContent>
            {items.map(item =>
                <DropdownItem key={item[keyName]} onClick={() => onChoose(item[keyName])}>
                    {item[textName]}
                </DropdownItem>
            )}
        </DropdownContent>
    </Layout>
)