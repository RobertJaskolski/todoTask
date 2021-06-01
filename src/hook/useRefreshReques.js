import { useSetRecoilState } from 'recoil';

export const useRefreshReques = (atomID) => {
  const setRefresh = useSetRecoilState(atomID);

  const handleRefresh = () => {
    setRefresh((x) => x + 1);
  };

  return handleRefresh;
};
