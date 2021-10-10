export const sortCategories = (a: any, b: any) => {
  if (a === 'Другое' || a > b) return 1;
  if (a < b) return -1;

  return 0;
};
