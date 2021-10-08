
export const getTwoDigits = (v: number) => `${v < 10 ? '0' + v : v}`;

export const getFormattedDate = (date: string | Date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${getTwoDigits(day)}/${getTwoDigits(month)}/${year}`;
}

export const getFormattedHour = (date: string | Date) => {
  const newDate = new Date(date);
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  return `${getTwoDigits(hour > 13 ? hour - 12 : hour)}:${getTwoDigits(minutes)} ${hour > 12 ? 'PM' : 'AM'}`
}

export const getFormattedDateTime = (date: string): string => {
  const newDate = new Date(date);
  return `${getFormattedDate(newDate)} ${getFormattedHour(newDate)}`;
}