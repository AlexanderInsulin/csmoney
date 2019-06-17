import { configure, addParameters } from '@storybook/react';
 
addParameters({
  backgrounds: [
    { name: 'main', value: 'rgb(229, 229, 230)', default: true },
    { name: 'white', value: '#ffffff' },
  ],
})

const req = require.context('../src/components', true, /.*\.storie\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
