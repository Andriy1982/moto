import {User} from '../user';

export namespace Event {
  export type File = {
    file: any;
    // name: string;
    // uri: string;
    // type: string;
  };

  export type State = 'enter' | 'leave';

  export type Item = {
    id: string;
    creatorId: string;
    creator?: User.User;
    name: string;
    substrate: string;
    address: {
      city: String;
      full: String;
      location: [number, number];
      distance?: number;
    };
    date: number;
    timeZone: number;
    participantIds: string[];
    participants?: User.User[];
    description: string;
    isDeleted: boolean;
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

  export type ReqCreateData = {
    name: string;
    date: number;
    timeZone: number;
    location: [number, number];
    city: string;
    textAddress: string;
    description?: string;
    substrate?: File;
  };

  export type CreateCallbacks = {
    success: (...params: any) => void;
    error: (...params: any) => void;
  };

  export type ReqCreateHeaders = {
    deviceid?: string;
  };

  export type ResFetchItems = {
    count: number;
    limit: number;
    skip: number;
    list: Item[];
  };

  export type ReqChangeStateData = {
    id: string;
    state: State;
  };

  export type ReqChangeSateHeaders = {
    deviceid?: string;
  };

  export type ReqDeleteData = {
    id: string;
  };

  export type ReqDeleteHeaders = {
    deviceid?: string;
  };
}
