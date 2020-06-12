import format from "date-fns/format";

const formatDate = (date, pattern) => {
  return format(date, pattern);
};

const DateFunction = (date) => {
  return format(date, "dd/MM/yyyy");
};
export const dateToUrl = (date) => {
  return formatDate(date, "dd-MM-yyyy");
};
export const dateToDisplay = (date) => {
  return formatDate(date, "dd/MM/yyyy");
};

export default DateFunction;
