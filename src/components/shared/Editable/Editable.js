import React, { useRef } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

const StyledContentEditable = styled(ContentEditable)`
    outline: none;
    min-width: 100%;
`

export default ({ text, onChange, tagName = 'div', className }) => {
    const ref = useRef()
    return (
        <StyledContentEditable
            innerRef={ref}
            html={text}
            onChange={(e) => { onChange(e.target.value) }}
            tagName={tagName}
            className={className}
        />
    )
}