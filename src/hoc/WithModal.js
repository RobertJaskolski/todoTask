import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box } from 'theme-ui';

const WithModal = (WrappedComponent) => {
  const modalContainer = document.getElementById('modal');
  const hocComponent = ({ isOpen, onClose, ...props }) => {
    return isOpen
      ? ReactDOM.createPortal(
          <Flex
            sx={{
              position: 'absolute',
              top: 0,
              width: '100vw',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0, 0.3)',
            }}
          >
            <Box
              sx={{
                flexBasis: ['90%', '80%', '45%', '35%'],
                backgroundColor: 'white',
                padding: ['30px 10px', '20px 50px 50px 50px'],
              }}
            >
              <WrappedComponent {...props} onClose={onClose} />
            </Box>
          </Flex>,
          modalContainer
        )
      : null;
  };

  return hocComponent;
};

export default WithModal;