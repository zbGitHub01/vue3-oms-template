import dayjs from 'dayjs';

const DateFormat = value => {
  return dayjs(value).format('YYYY-MM-DD HH:mm-ss');
};

const AmountFormat = value => {
  return value.toLocaleString('en-US');
};

export {
  DateFormat,
  AmountFormat,
};
