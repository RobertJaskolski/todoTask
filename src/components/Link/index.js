import React from 'react';
import PropTypes from 'prop-types';
import { Link as ThemeUiLink } from 'theme-ui';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = ({ children, to, sx = {} }) => {
  return (
    <ThemeUiLink sx={{ ...sx }} to={to} as={ReactRouterLink}>
      {children}
    </ThemeUiLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default Link;
