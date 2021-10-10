import {Support} from '@app/bus/support';
import {object, SchemaOf, string} from 'yup';

export const schema: SchemaOf<Support.ReqDataCreate> = object().shape({
  email: string().required('required').email('invalid_email'),
  subject: string().required('required'),
  description: string().required('required'),
  category: string().required('required'),
});
