import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Editable from './Editable';

const StyledEditable = styled(Editable)`
    color: red;
    font-size: 42px;
`

storiesOf('shared/Editable', module)
  .add('Simple editable div', () => (
      <Editable
        text={text('text', 'hello, world')}
        placeholder={text('placeholder', 'TITLE')}
        onChange={action('onChange')}
        tagName={text('tagName', 'div')}
      />
  ))
  .add('styled editable h1', () => (
      <StyledEditable
        text={text('text', 'hello, world')}
        onChange={action('onChange')}
        tagName='h1'
      />
  ))
