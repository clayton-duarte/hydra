// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Title from './';

storiesOf('Title', module)
    .addWithDoc('default', Title, 'Component description',  () => <Title />);
