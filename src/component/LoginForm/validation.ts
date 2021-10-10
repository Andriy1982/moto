import {object, string, SchemaOf} from 'yup';
import {Auth} from '@app/bus/auth';

export const schema: SchemaOf<Auth.ReqLogin> = object().shape({
  login: string()
    .required('required')
    .matches(/[0-9]{11}/gi, 'invalid_phone'),
  password: string().required('required'),
});
