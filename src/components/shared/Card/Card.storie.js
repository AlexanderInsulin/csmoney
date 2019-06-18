import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Card from './Card';

storiesOf('shared/Card', module)
  .add('with text', () => (
      <Card> {text('children', 'I am a Card!')} </Card>
  ))
