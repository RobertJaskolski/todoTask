export const handleDateToString = (stringDate) => {
  const date = new Date(stringDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${
    date.getHours() + 1
  }:${date.getMinutes() + 1}`;
};
