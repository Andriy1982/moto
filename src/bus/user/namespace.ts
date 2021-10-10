export namespace User {
  type Platform = 'local' | 'vk' | 'facebook' | 'instagram';

  export type Role = 'user' | 'partner' | 'admin' | 'guest';

  export type Active = 'prereg' | 'active';

  type Settings = {
    pushOfEvents: boolean;
    pushOfSos: boolean;
    radiusOfSosRequest: number;
    radiusOfEventRequest: number;
    theme: string;
  };

  export type Address = {
    city: string;
    full: string;
    coordinates: [number, number];
    distance?: number;
  };

  type ContactPlatform =
    | 'whatsapp'
    | 'telegram'
    | 'facebook'
    | 'weblink'
    | 'phone'
    | 'instagram'
    | 'vk';

  export type Contacts = {
    type: ContactPlatform;
    link: string;
  };

  export type ReqContacts = {
    type: ContactPlatform;
    link?: string;
  };

  export type File = {
    file: any;
    // name: string;
    // uri: string;
    // type: string;
  };

  export type Avatar = {
    original: string;
    thumb: string;
  };

  export type Garage = {
    icon: 'moto' | 'atv' | 'snowmobile';
    description: string;
  };

  export type User = {
    id: string;
    platform?: Platform;
    phone?: string;
    email: string;
    role: Role;
    type: Active;
    name: string;
    avatar?: Avatar;
    address: Address;
    contacts: Contacts[];
    description: string;
    garage: Garage[];
    settings: Settings;
    created: number;
  };

  export type Partner = {
    categories: string[];
    photos: Avatar[];
    isSubscribe?: boolean;
    subscriptionExpiration?: number;
    storeCoordinates: [number, number];
  } & User;

  export type ReqChangeUserData = {
    name?: string;
    avatar?: File;
    city?: string;
    description?: string;
    contacts?: string | ReqContacts[];
    garage?: Garage[];
    pushOfSos?: boolean;
    pushOfEvents?: boolean;
    radiusOfSosRequest?: number;
    radiusOfEventRequest?: number;
    theme?: string;
  };

  export type ReqChangePartnerData = {
    name?: string;
    avatar?: File;
    categories?: string[];
    description?: string;
    contacts?: string | ReqContacts[];
    textAddress?: string;
    photos?: File[];
    city?: string;
    theme?: string;
    storeCoordinates?: [number, number];
    pushOfSos?: boolean;
    pushOfEvents?: boolean;
    radiusOfSosRequest?: number;
    radiusOfEventRequest?: number;
  };

  export type ReqChangeUserHeaders = {
    deviceid?: string;
  };

  export type ReqChangeUserParams = {
    id: string;
  };

  export type ReqDeletePhotoHeaders = {
    deviceid?: string;
  };

  export type ReqDeletePhotoParams = {
    id: string;
    uri: string;
  };

  export type ReqUpdateGeo = {
    id: string;
    coordinates: [number, number];
  };

  export type ReqRegisterFCM = {
    token: string;
  };

  export type PayloadChangeUser = ReqChangeUserData & ReqChangeUserParams;

  export type PayloadChangePartner = ReqChangePartnerData & ReqChangeUserParams;
}
