import React, { useRef } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

const StyledContentEditable = styled(ContentEditable)`
    outline: none;
    min-width: 100%;
    word-break: break-all;

    &:empty:before {
        content: attr(placeholder);
        color: #bdb9b9;
    }
`

export default ({ text, placeholder, onChange, tagName = 'div', className }) => {
    const ref = useRef()
    return (
        <StyledContentEditable
            innerRef={ref}
            placeholder={placeholder}
            html={text}
            onChange={(e) => { onChange(e.target.value) }}
            tagName={tagName}
            className={className}
        />
    )
}