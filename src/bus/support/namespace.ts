import {User} from '../user';

export namespace Support {
  export type ReqDataCreate = {
    category: string;
    subject: string;
    email: string;
    description: string;
  };

  export type ReqHeadersCreate = {
    deviceid?: string;
  };
}
