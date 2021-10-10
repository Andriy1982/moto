import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//app
import {eventActions, eventSelectors} from '@app/bus/event';
import {userSelectors} from '@app/bus/user';
import {Event} from '@app/bus/event';
import {uiSelectors} from '@app/bus/ui';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';

export const useData = ({id}: {id: string}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {addToast} = useToasts();
  const event = useSelector(eventSelectors.getDetail);
  const authenticatedUserId = useSelector(userSelectors.getCurrent)?.id || null;
  const isLoading = useSelector(uiSelectors.getLoading('change_event'));
  const isRefreshing = useSelector(uiSelectors.getLoading('fetch_detail_event'));

  const reset = useCallback(() => {
    dispatch(eventActions.fetchDetailAsync(id));
  }, [id]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    dispatch(eventActions.clearDetail());
  }, [id]);

  const changeSate = useCallback(
    (state: Event.State) => {
      if (event && event.id)
        dispatch(
          eventActions.changeStateAsync({
            id: event.id,
            state,
          }),
        );
    },
    [event?.id],
  );

  const onDelete = useCallback(() => {
    if (event && event.id)
      dispatch(
        eventActions.deleteAsync({
          id: event.id,
          toast: addToast,
          navigate: history.push,
        }),
      );
  }, [event?.id]);

  const handleDelete = () => {
    if (window.confirm('Вы уверены?')) {
      onDelete();
    }
  };

  return {
    changeSate,
    handleDelete,
    isLoading,
    authenticatedUserId,
    event,
    isRefreshing: !!isRefreshing && !!event,
    onRefresh: reset,
  };
};
