import { node, object } from 'prop-types';
import React from 'react';

import StyledTitle from './styled';

const Title = props => <StyledTitle {...props} />

Title.propTypes = {
    theme: object,
    children: node,
}

Title.defaultProps = {
    children: 'My title',
    theme: {
        color: 'tomato'
    }
}

export default Title;