import {Auth} from '@app/bus/auth';
import {object, string, SchemaOf} from 'yup';

export const schema: SchemaOf<Auth.ReqStartResetPassword> = object().shape({
  login: string().required('required'),
});
