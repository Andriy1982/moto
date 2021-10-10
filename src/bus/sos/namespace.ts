import {User} from '../user';

export namespace Sos {
  export type State = 'enter' | 'leave';

  export type Signal = {
    id: string;
    creatorId: string;
    creator?: User.User;
    description: string;
    address: {
      city: String;
      full: String;
      location: [number, number];
      distance?: number;
    };
    timeZone: number;
    responderIds: string[];
    responders?: User.User[];
    created: number;
    isDeleted: boolean;
  };

  //requests

  export type ReqCreateData = {
    location: [number, number];
    city: string;
    timeZone: number;
    textAddress?: string;
  };

  export type ReqCreateHeaders = {
    deviceid?: string;
  };

  export type ReqChangeData = {
    id: string;
    description: string;
  };

  export type ReqChangeHeaders = {
    deviceid?: string;
  };

  export type ReqFetchDetailParams = {
    id: string;
    withCreatorData?: boolean;
    withRespondersData?: boolean;
  };

  export type ReqFetchDetailHeaders = {
    deviceid?: string;
  };

  export type ReqDeleteParams = {
    id: string;
  };

  export type ReqDeleteHeaders = {
    deviceid?: string;
  };

  export type ReqFetchItems = {
    limit?: number;
    skip?: number;
    timeZone: number;
    latitude?: number;
    longitude?: number;
    radiusOfView?: number;
    sortField?: 'coordinates';
    includeDeleted?: boolean;
    includePassed?: boolean;
    id?: string;
  };

  export type ReqChangeStateData = {
    id: string;
    state: State;
  };

  export type ReqChangeStateHeaders = {
    deviceid?: string;
  };
  //response

  export type ResFetchItems = {
    count: number;
    limit: number;
    skip: number;
    list: Signal[];
  };

  export type ResCreate = Signal;

  export type ResChange = Signal;

  export type ResFetchDetail = Signal;
}
