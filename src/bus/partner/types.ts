import {User} from '../user';
import type {Partner} from './namespace';

export enum types {
  //Async
  FETCH_ITEMS = 'PARTNER/FETCH_ITEMS',
  FETCH_ITEMS_MAP = 'PARTNER/FETCH_ITEMS_MAP',
  FETCH_DETAIL = 'PARTNER/FETCH_DETAIL',
}

// STATE

export type PartnerState = {
  items: Partner.Item[];
  mapItems: Partner.Item[];
  skip: number;
  count: number;
  init: boolean;
  detail: User.Partner | null;
};

// ASYNC

export type FetchItemsAsync = {
  type: typeof types.FETCH_ITEMS;
  payload: Partner.ReqFetchItems;
};

export type FetchItemsMapAsync = {
  type: typeof types.FETCH_ITEMS_MAP;
  payload: Partner.ReqFetchItems;
};

export type FetchDetailAsync = {
  type: typeof types.FETCH_DETAIL;
  payload: Partner.ReqFetchDetail;
};

export type PartnerActionTypes = FetchItemsAsync | FetchItemsMapAsync | FetchDetailAsync;
