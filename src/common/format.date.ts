import moment from "moment";

export const formatDate = (date: string) => {
  let newDate = new Date(date).toString();
  return moment(newDate).format("dddd Do MMMM YYYY h:mm:ss a");
};
