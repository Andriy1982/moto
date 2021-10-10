import type {User} from './namespace';

export enum types {
  FETCH_CURRENT_USER_LOCAL = 'USER/FETCH_CURRENT_USER_LOCAL',
  END_FETCH_CURRENT_USER_LOCAL = 'USER/END_FETCH_CURRENT_USER_LOCAL',
  CREATE_CURRENT_USER_LOCAL = 'USER/CREATE_CURRENT_USER_LOCAL',
  END_CREATE_CURRENT_USER_LOCAL = 'USER/END_CREATE_CURRENT_USER_LOCAL',
  CHANGE_USER = 'USER/CHANGE_USER',
  DELETE_PHOTO = 'USER/DELETE_PHOTO',
  FETCH_DETAIL = 'USER/FETCH_DETAIL',
  REGISTER_FCM = 'USER/REGISTER_FCM',
}

// STATE
export type UserState = {
  current: User.User | User.Partner | null;
  detail: User.User | null;
};

export type FetchCurrentLocalAsync = {
  type: types.FETCH_CURRENT_USER_LOCAL;
};

export type CreateCurrentLocalAsync = {
  type: types.CREATE_CURRENT_USER_LOCAL;
  payload: User.User | User.Partner | null;
};

export type ChangeAsync = {
  type: types.CHANGE_USER;
  payload: User.PayloadChangeUser | User.PayloadChangePartner;
};

export type DeletePhotoAsync = {
  type: types.DELETE_PHOTO;
  payload: string;
};

export type FetchDetailAsync = {
  type: types.FETCH_DETAIL;
  payload: string | any; // error
};

export type RegisterFCMAsync = {
  type: types.REGISTER_FCM;
  payload: string;
};

export type UserActionTypes =
  | FetchCurrentLocalAsync
  | CreateCurrentLocalAsync
  | ChangeAsync
  | FetchDetailAsync
  | RegisterFCMAsync;
