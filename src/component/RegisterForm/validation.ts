import {object, string, ref, mixed, SchemaOf} from 'yup';

export type TForm = {
  // deviceId?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  role: 'user' | 'partner';
};

export const schema: SchemaOf<TForm> = object().shape({
  // deviceId: string().required('required'),
  name: string().required('required').min(3),
  email: string().required('required').email('invalid_email'),
  phone: string()
    .required('required')
    .matches(/[0-9]{11}/gi, 'invalid_phone'),
  password: string().required('required'),
  role: mixed().oneOf(['user', 'partner'], 'undefined_role'),
  confirm_password: string()
    .required('required')
    .oneOf([ref('password'), null], 'confirm_password'),
});
