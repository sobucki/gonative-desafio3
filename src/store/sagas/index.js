import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';

import { Types as UserTypes, Creators as UserActions } from '~/store/ducks/user';
import { Creators as ModalActions } from '~/store/ducks/modal';

function* findUserGit(action) {
  try {
    const { username } = action.payload;

    const { data } = yield call(api.get, `/users/${username}`);

    const userData = {
      id: data.id,
      name: data.name,
      avatar_url: data.avatar_url,
      login: data.login,
      bio: data.bio,
      coordinate: action.payload.coordinate,
    };

    yield put(UserActions.addUserSuccess(userData));
    yield put(ModalActions.hideModal());
  } catch (error) {
    yield put(UserActions.addUserFailure('Usuário não encontrado'));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_REQUEST, findUserGit)]);
}
