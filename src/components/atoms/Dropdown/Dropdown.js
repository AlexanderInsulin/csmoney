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
`

const Layout = styled.div`
    position: relative;
    width: fit-content
    
    &:hover ${DropdownContent}:not(:empty) {
        display: block;
    }
`

export default ({ children, items = [] }) => (
    <Layout>
        {children}
        <DropdownContent>
            {items.map(item =>
                <DropdownItem key={item.text} onClick={item.action}>
                    {item.text}
                </DropdownItem>
            )}
        </DropdownContent>
    </Layout>
)