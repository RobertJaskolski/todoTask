import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Flex, Box } from 'theme-ui';

const WithModal = (WrappedComponent) => {
  const modalContainer = document.getElementById('modal');
  const HocComponent = ({ isOpen, onClose, ...props }) => {
    return isOpen
      ? ReactDOM.createPortal(
          <Flex
            sx={{
              position: 'fixed',
              top: 0,
              width: '100vw',
              height: '100vh',
              minheight: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 11,
              backgroundColor: 'rgba(0,0,0, 0.3)',
            }}
          >
            <Box
              sx={{
                flexBasis: ['90%', '80%', '45%', '35%'],
                backgroundColor: 'white',
                padding: ['10px', '30px 5px', '20px 50px 50px 50px'],
              }}
            >
              <WrappedComponent {...props} onClose={onClose} />
            </Box>
          </Flex>,
          modalContainer
        )
      : null;
  };

  HocComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return HocComponent;
};

export default WithModal;
