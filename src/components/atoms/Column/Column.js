import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 0 12px #eeeeee;
    z-index: +1;
`

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-top: 20px;
`

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: rgb(242, 242, 242);
    overflow: hidden;
    height: 100%;
    flex: 1;
`

export default ({ header, children }) => (
    <Layout>
        <Header>
            { header }
        </Header>
        <Content>
            { children }
        </Content>
    </Layout>
)