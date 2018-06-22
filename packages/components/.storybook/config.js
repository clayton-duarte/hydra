import { configure, setAddon } from '@storybook/react';
import addWithDoc from 'storybook-addon-props';

setAddon(addWithDoc);

function loadStories() {
  require('glob-loader!./pattern');
}

configure(loadStories, module);
