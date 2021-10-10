import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

//@ts-ignore next line
import ru from './locale/ru.json';
import ENV from '@app/configs';

const resources = {
  ru: {
    translation: ru,
  },
};

export enum Languages {
  RU = 'ru',
}

i18n.use(initReactI18next).init({
  resources,
  lng: ENV.DEFAULT_LOCALE,
  fallbackLng: Languages.RU,
  keySeparator: '.',
  debug: ENV.IS_DEVELOPMENT,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
