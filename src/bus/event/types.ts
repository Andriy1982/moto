import {Ui} from '../ui';
import type {Event} from './namespace';

export enum types {
  //Async
  FETCH_ITEMS = 'EVENT/FETCH_ITEMS',
  DELETED_ITEMS = 'SOS/DELETED_ITEMS',
  FETCH_DETAIL = 'EVENT/FETCH_DETAIL',
  CREATE_ITEM = 'EVENT/CREATE_ITEM',
  CHANGE_STATE = 'EVENT/CHANGE_STATE',
  DELETE_ITEM = 'EVENT/DELETE_ITEM',
}

// STATE

export type EventState = {
  items: Event.Item[];
  skip: number;
  limit: number;
  count: number;
  detail: Event.Item | null;
};

// ASYNC

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Event.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: string;
};

export type DeletedItemsAsync = {
  type: typeof types.DELETED_ITEMS;
  payload: Event.ReqFetchItems;
};

export type CreateAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Event.ReqCreateData & Event.CreateCallbacks;
};

export type ChangeStateAsync = {
  type: typeof types.CHANGE_STATE;
  payload: Event.ReqChangeStateData;
};

export type DeleteAsync = {
  type: typeof types.DELETE_ITEM;
  payload: Event.ReqDeleteData & Ui.Callback;
};

export type EventActionTypes =
  | FetchItemsAsync
  | FetchDetailAsync
  | CreateAsync
  | ChangeStateAsync
  | DeleteAsync
  | DeletedItemsAsync;
