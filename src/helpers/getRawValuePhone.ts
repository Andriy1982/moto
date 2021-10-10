export const getRawValuePhone = (value?: string) => {
  return value ? value.replace(/\D/gi, '') : '';
};
