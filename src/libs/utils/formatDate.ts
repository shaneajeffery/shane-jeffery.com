export const formatDate = (date: Date) => {
  const dateInput = new Date(date);
  const currentDay = dateInput.getDate();

  const paddedCurrentDay =
    dateInput.getDate() < 10 ? `0${currentDay}` : currentDay;

  const month = dateInput.toLocaleString('default', { month: 'short' });
  const year = dateInput.getFullYear().toString().substring(-2);
  const theDate = `${paddedCurrentDay} ${month} / ${year}`;

  return theDate;
};
