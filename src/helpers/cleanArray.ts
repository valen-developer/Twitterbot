export const cleanArray = <T>(array: T[]): T[] => {
  return array.filter((item) => item !== undefined && item !== null);
};
