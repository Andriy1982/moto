import {string, object, boolean, number, array, SchemaOf} from 'yup';
import {User} from '@app/bus/user';

const photo: SchemaOf<User.File> = object().default(null).nullable().shape({
  // name: string().required('required'),
  // uri: string().required('required'),
  // type: string().required('required'),
});

const contact = object().shape({
  type: string().oneOf(['whatsapp', 'telegram', 'facebook', 'weblink', 'phone', 'instagram', 'vk']),
  link: string(),
});

const garage = object().shape({
  icon: string().oneOf(['snowmobile', 'moto', 'atv']),
  description: string().required('required'),
});

export const schema: SchemaOf<User.PayloadChangeUser> = object().shape({
  id: string().required('required'),
  name: string().required('required'),
  avatar: photo.notRequired(),
  city: string(),
  description: string(),
  contacts: array().of(contact).notRequired(),
  garage: array().of(garage).notRequired(),
  pushOfSos: boolean(),
  pushOfEvents: boolean(),
  radiusOfSosRequest: number(),
  radiusOfEventRequest: number(),
  theme: string(),
});
