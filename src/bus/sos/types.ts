import {Ui} from '../ui';
import type {Sos} from './namespace';

export enum types {
  //Async
  FETCH_ITEMS = 'SOS/FETCH_ITEMS',
  DELETED_ITEMS = 'SOS/DELETED_ITEMS',
  FETCH_ITEM = 'SOS/FETCH_ITEM',
  FETCH_DETAIL = 'SOS/FETCH_DETAIL',
  CREATE_ITEM = 'SOS/CREATE_ITEM',
  CHANGE_ITEM = 'SOS/CHANGE_ITEM',
  DELETE_ITEM = 'SOS/DELETE_ITEM',
  CHANGE_STATE = 'SOS/CHANGE_STATE',
  END_DELETE_ITEM = 'SOS/END_DELETE_ITEM',
}

// STATE

export type SosState = {
  current: Sos.Signal | null;
  items: Sos.Signal[];
  detail: Sos.Signal | null;
};

// ASYNC

export type FetchCurrentAsync = {
  type: typeof types.FETCH_ITEM;
  payload: Sos.ReqFetchDetailParams;
};

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Sos.ReqFetchItems;
};

export type DeletedItemsAsync = {
  type: typeof types.DELETED_ITEMS;
  payload: Sos.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: string;
};

export type CreateAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Sos.ReqCreateData & Ui.Callback;
};

export type ChangeAsync = {
  type: typeof types.CHANGE_ITEM;
  payload: Sos.ReqChangeData & Ui.Callback;
};

export type DeleteAsync = {
  type: typeof types.DELETE_ITEM;
  payload: Sos.ReqDeleteParams & Ui.Callback;
};

export type ChangeStateAsync = {
  type: typeof types.CHANGE_STATE;
  payload: Sos.ReqChangeStateData;
};

export type SosActionTypes =
  | FetchDetailAsync
  | FetchCurrentAsync
  | CreateAsync
  | ChangeAsync
  | DeleteAsync
  | FetchItemsAsync
  | ChangeStateAsync
  | DeletedItemsAsync;
