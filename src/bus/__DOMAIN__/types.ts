import type {Domain} from './namespace';

export enum types {
  //Async
  FETCH_ITEMS = 'DOMAIN/FETCH_ITEMS',
  FETCH_DETAIL = 'DOMAIN/FETCH_DETAIL',
  CREATE_ITEM = 'DOMAIN/CREATE_ITEM',
  CHANGE_ITEM = 'DOMAIN/CHANGE_ITEM',
  DELETE_ITEM = 'DOMAIN/DELETE_ITEM',
}

// STATE

export type DomainsState = {
  items: Domain.Item[] | [];
  detail: Domain.Detail | null;
  count: number;
  loading: boolean;
};

// ASYNC

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Domain.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: number;
};

export type CreateAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Domain.ReqCreate;
};

export type ChangeAsync = {
  type: typeof types.CHANGE_ITEM;
  payload: Domain.ReqChange;
};

export type DeleteAsync = {
  type: typeof types.DELETE_ITEM;
  payload: number;
};

export type DomainsActionTypes =
  | FetchItemsAsync
  | FetchDetailAsync
  | CreateAsync
  | ChangeAsync
  | DeleteAsync;
