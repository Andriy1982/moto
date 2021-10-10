import {all, call} from 'redux-saga/effects';

//watchers
import {watchApp} from '@app/bus/app/saga/watchers';
import {watchThemes} from '@app/bus/themes/saga/watchers';
import {watchAuth} from '@app/bus/auth/saga/watchers';
import {watchUser} from '@app/bus/user/saga/watchers';
import {watchSos} from '@app/bus/sos/saga/watchers';
import {watchPartner} from '@app/bus/partner/saga/watchers';
import {watchEvent} from '@app/bus/event/saga/watchers';
import {watchSupport} from '@app/bus/support/saga/watchers';

function* rootSaga() {
  try {
    yield all([
      call(watchApp),
      call(watchThemes),
      call(watchAuth),
      call(watchUser),
      call(watchSos),
      call(watchPartner),
      call(watchEvent),
      call(watchSupport),
    ]);
  } catch (error) {
    console.error('⛔️ error', error);
  }
}

export default rootSaga;
