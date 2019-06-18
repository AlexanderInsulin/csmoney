import React from 'react';
import { storiesOf } from '@storybook/react';
import Column from './Column';

storiesOf('shared/Column', module)
  .add('with text', () => (
    <div style={{ width: '280px', height: '300px'  }}>
        <Column>
            I am a Column!
        </Column>
    </div>
  ))