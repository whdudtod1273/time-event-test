import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
dayjs.locale("ko");
import "dayjs/locale/ko";

const useFastOrder = () => {
  const [orderMent, setOrderMent] = useState("");
  const { current: today } = useRef(dayjs());

  useEffect(() => {
    // 12:00am ~ 10:00am
    if (today.isBetween(dayjs("00:00:00", "HH:mm:ss"), dayjs("10:00:00", "HH:mm:ss"))) {
      setOrderMent("오늘 점심 빠르게 주문해봐요!");
    }
    // 10:00am ~ 14:00pm
    else if (today.isBetween(dayjs("10:00:00", "HH:mm:ss"), dayjs("14:00:00", "HH:mm:ss"))) {
      setOrderMent("오늘 저녁 빠르게 주문해봐요!");
    }
    // 14:00pm ~ 12:00am
    else {
      setOrderMent("내일 점심 미리 주문해봐요!");
    }
  }, [today]);

  return { orderMent, today };
};
export default useFastOrder;
