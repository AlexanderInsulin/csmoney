import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Column from './Column';

const Block = styled.div`
    height: 120px;
    background-color: #ffffff;
    margin: 0px 10px 20px;
    flex-shrink: 0;
`

storiesOf('Column', module)
  .add('with text', () => (
    <div style={{ width: '280px', height: '300px'  }}>
        <Column header={<div>123</div>}>
            Loren ipsum!
        </Column>
    </div>
  ))
  .add('with overflowed blocks', () => (
    <div style={{ width: '280px', height: '300px' }}>
        <Column header={<div>123</div>}>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </Column>
    </div>
  ))