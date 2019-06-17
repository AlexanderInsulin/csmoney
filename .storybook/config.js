import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import '../src/index.css';

addParameters({
  backgrounds: [
    { name: 'main', value: 'rgb(229, 229, 230)', default: true },
    { name: 'white', value: '#ffffff' },
  ],
})

addDecorator(withKnobs)
addDecorator(centered)

const req = require.context('../src/components', true, /.*\.storie\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
