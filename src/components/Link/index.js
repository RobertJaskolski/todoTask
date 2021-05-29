import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ThemeUiLink } from 'theme-ui';

const Link = ({ children, to, sx = {} }) => {
  return (
    <ThemeUiLink sx={{ ...sx }} to={to} as={ReactRouterLink}>
      {children}
    </ThemeUiLink>
  );
};

export default Link;
