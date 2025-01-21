import { format } from "date-fns";

export default function FormattedDate() {
  const date = new Date();
  const dateFormat = format(date, "MMMM dd, yyyy HH:mm:ss");
  return dateFormat;
}
