import {User} from '../user';

export namespace Partner {
  export type Item = User.Partner;

  export type ReqFetchItems = {
    limit?: number;
    skip?: number;
    city?: string;
    categories?: string[];
    latitude?: number;
    longitude?: number;
    radiusOfView?: number;
    sortField?: 'coordinates';
  };

  export type ResFetchItems = {
    skip: number;
    limit: number;
    count: number;
    list: Item[];
  };

  export type ReqFetchDetail = {
    id: string;
  };
}
