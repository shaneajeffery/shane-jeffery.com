// @ts-ignore
export const formatDate = (date) => {
  const dateInput = new Date(date);
  let day = dateInput.getDate();
  // @ts-ignore
  day = dateInput.getDate() < 10 ? `0${day}` : day;

  const month = dateInput.toLocaleString('default', { month: 'short' });
  const year = dateInput.getFullYear().toString().substring(-2);
  const theDate = `${day} ${month} / ${year}`;

  return theDate;
};
