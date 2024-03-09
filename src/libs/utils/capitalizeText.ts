// @ts-ignore
export const capitalizeText = (string) => {
  return (
    string
      .split('-')
      // @ts-ignore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
};
