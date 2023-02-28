import dayjs from "dayjs";
dayjs.locale("ko");
import "dayjs/locale/ko";

const getDayOfWeek = (date?: string) => {
  const dayOfWeek = dayjs().day();

  switch (dayOfWeek) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
};

const getDayTime = (date?: string) => {
  return Number(dayjs(date).format("HHmm"));
};

export { getDayOfWeek, getDayTime };
