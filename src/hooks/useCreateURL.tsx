export const useCreateURL = (stringArray: string[]) => {
  stringArray.map((item) => {
    item.split(' ').join('_').toLowerCase();

    return stringArray;
  });
};
