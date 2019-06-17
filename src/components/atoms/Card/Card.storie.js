import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('atoms/Card', module)
  .add('with text', () => (
    <div style={{ width: '280px' }}>
        <Card>Loren ipsum!</Card>
    </div>
  ))
