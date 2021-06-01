import React from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { currentUserState, newDataUserState } from '../recoil/user';

const WithUser = (WrappedComponent) => {
  const HocComponent = ({ ...props }) => {
    const setNewUser = useSetRecoilState(newDataUserState);
    const user = useRecoilValueLoadable(currentUserState);
    return <WrappedComponent user={user} setNewUser={setNewUser} {...props} />;
  };

  return HocComponent;
};

export default WithUser;
