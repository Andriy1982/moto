export const baseEnv = () => ({
  DEFAULT_LOCALE: 'ru',
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_TESTING: false,
  BASE_URL: 'https://controlridersapp.ru',
  YANDEX_API_KEY: 'dcab787c-63e4-4cc3-8c09-95f219a1fade',
  DA_DATA_URL: 'https://suggestions.dadata.ru',
  DA_DATA_KEY: '20002b6435d522a80154a9d8a620aed2059cac35',
  DA_DATA_SECRET: '4b5719f615c16529df0fe80d39a4dca825d4809c',
  PHONE_MASK: '+7 (111) 111-11-11',
});

export type Environment = ReturnType<typeof baseEnv>;
