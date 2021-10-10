import {string, object, number, array, SchemaOf} from 'yup';
import {Event} from '@app/bus/event';
import {differenceInMinutes} from 'date-fns';

const photo: SchemaOf<Event.File> = object().default(null).nullable().shape({
  // name: string().required('required'),
  // uri: string().required('required'),
  // type: string().required('required'),
});

export const schema: SchemaOf<Event.ReqCreateData> = object().shape({
  name: string().required('required'),
  date: number()
    .required('required')
    .test('min_date', 'min_date', (value?: number) => {
      if (value) {
        const dateNow = new Date();
        const dateValue = new Date(value);

        if (value > dateNow.getTime() && differenceInMinutes(dateValue, dateNow) >= 1) {
          return true;
        }
      }
      return false;
    }),
  timeZone: number().required('required'),
  location: array().of(number().required('required')).required('required'),
  city: string().required('required'),
  textAddress: string().required('required'),
  description: string(),
  substrate: photo.notRequired(),
});
