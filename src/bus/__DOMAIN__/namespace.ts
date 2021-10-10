export namespace Domain {
  type Info = {};

  export type Item = {
    clientInfo: Info;
    createDate: Date;
    email: string;
    id: number;
    isActive: boolean;
    isDeleted: boolean;
  };

  export type Detail = {
    clientInfo: Info;
    createDate: Date;
    email: string;
    id: number;
    isActive: boolean;
    isDeleted: boolean;
    roleId: number;
    updateDate: Date;
  };

  export type Files = {
    id: number;
    mimetype: string;
    name: string;
    url: string;
  };

  export type ReqFetchItems = {
    limit?: number;
    page?: number;
    sortField?: 'users.id' | 'users.email' | null;
    sort?: 'ASC' | 'DESC' | null;
    searchString?: string;
    statuses?: number[];
  };

  export type ReqFetchFiles = {
    id: number;
    params?: {
      limit?: number;
      page?: number;
      sortField?: string;
      sort?: 'ASC' | 'DESC';
      searchString?: string;
    };
  };

  export type ReqCreate = {
    email: string;
    name: string;
    phoneNumber: string;
    birthDate: string;
    note: string;
  };

  export type ReqChange = {
    id: number;
    data: {
      email: string;
      name: string;
      phoneNumber: string;
      birthDate: string;
      note: string;
    };
  };

  export type ReqDelete = number;

  export type ReqChangeAvatar = {
    id: number;
    //file: File
  };

  export type ResFetchItems = {
    count: number;
    items: Item[];
  };

  export type ResFetchFiles = {
    count: number;
    items: Files[];
  };

  export type ResChangeAvatar = {
    mimetype: string;
    name: string;
    url: string;
  };
}
