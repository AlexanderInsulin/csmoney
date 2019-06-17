import styled from 'styled-components'

export const types = {
    danger: '#ef5050',
    secondary: '#bdb9b9',
    succeed: '#2DCD72',
    primary: '#4B7CF3',
}

export const sizes = {
    sm: '14px',
    md: '16px',
    lg: '18px',
}

export default styled.button`
    all: unset;
    color: ${({ type }) => types[type]};
    font-size: ${({ size }) => sizes[size]};

    ${ ({underline, type}) => underline && `
        border-bottom: 1px solid ${types[type] || '#000000'}22;
    ` }
`