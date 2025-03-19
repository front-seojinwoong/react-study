export const formatDate = (targetDate: Date | string | null | undefined) => {
  if (!targetDate) return "";

  let dateString: string;
  if (targetDate instanceof Date) {
    dateString = targetDate.toISOString();
  } else {
    dateString = targetDate;
  }

  const [date] = dateString.split("T");
  const [year, month, day] = date.split("-");
  return `${year}년 ${month}월 ${day}일`;
};

export const whatIs = (target) => {
  return Object.prototype.toString.call(target);
};
