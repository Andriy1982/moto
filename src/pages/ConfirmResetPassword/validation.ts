import {Auth} from '@app/bus/auth';
import {object, string, mixed, SchemaOf, ref} from 'yup';

export const schema: SchemaOf<Auth.ReqEndResetPassword & {confirm_password: string}> =
  object().shape({
    password: string().required('required'),
    login: string().required('required'),
    code: string().required('required'),
    system: mixed().oneOf(['web']).required('required'),
    deviceId: string(),
    confirm_password: string()
      .required('required')
      .oneOf([ref('password'), null], 'confirm_password'),
  });
