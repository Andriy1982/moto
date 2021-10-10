import {Auth} from '@app/bus/auth';
import {object, string, SchemaOf} from 'yup';

export const schema: SchemaOf<Auth.PayloadValidateCode> = object().shape({
  code: string().required('required').min(5, 'min_length'),
  login: string().required('required'),
  id: string(),
});
