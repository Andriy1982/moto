import type {Support} from './namespace';
import {Ui} from '../ui';

export enum types {
  //Async
  CREATE_ITEM = 'SUPPORT/CREATE_ITEM',
}

// STATE

export type SupportState = {};

// ASYNC

export type CreateAsync = {
  type: typeof types.CREATE_ITEM;
  payload: Support.ReqDataCreate & Ui.Callback;
};

export type SupportActionTypes = CreateAsync;
