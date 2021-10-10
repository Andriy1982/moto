import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//app
import {userSelectors} from '@app/bus/user';
import {uiSelectors} from '@app/bus/ui';
import {Sos, sosActions, sosSelectors} from '@app/bus/sos';

export const useData = ({id}: {id: string}) => {
  const dispatch = useDispatch();
  const signal = useSelector(sosSelectors.getDetail);
  const authenticatedUserId = useSelector(userSelectors.getCurrent)?.id || null;
  const isLoading = useSelector(uiSelectors.getLoading('change_state_sos'));
  const isRefreshing = useSelector(uiSelectors.getLoading('fetch_detail_sos'));

  const reset = useCallback(() => {
    dispatch(sosActions.fetchDetailAsync(id));
  }, [id]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    dispatch(sosActions.clearDetail());
  }, [id]);

  const changeSate = useCallback(
    (state: Sos.State) => {
      if (signal && signal.id)
        dispatch(
          sosActions.changeStateAsync({
            id: signal.id,
            state,
          }),
        );
    },
    [signal?.id],
  );

  return {
    changeSate,
    isLoading,
    authenticatedUserId,
    signal,
    isRefreshing: !!isRefreshing && !!signal,
    onRefresh: reset,
  };
};
