import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import Action, { types, sizes } from './Action';

const selectHelper = (propTypes) => {
    const values = Object
        .keys(propTypes)
        .reduce((accum, key) => ({ ...accum, [key]: key }), {})
    return { '': null, ...values }
} 

const typesNames = selectHelper(types)
const sizesNames = selectHelper(sizes)

storiesOf('shared/Action', module)
  .add('with text', () => (
    <Action
        underline={boolean('underline', false)}
        type={select('type', typesNames, typesNames[0])}
        size={select('size', sizesNames, sizesNames[0])}
        onClick={action('onClick')}
    >
        { text('children', 'Удалить') }
    </Action>
  ))
