import { getDayOfWeek, getDayTime } from "@/utils/getDate";
import { useEffect, useRef, useState } from "react";
import useTimer from "./useTimer";

export interface deliveryInfo {
  name: string;
  description: string;
}

interface Props {
  method: string;
}

const useDeliveryType = ({ method }: Props) => {
  const { timer, countdownTime } = useTimer();
  const [deliveryInfo, setDeliveryInfo] = useState<deliveryInfo>({
    name: "",
    description: "",
  });
  const { current: nowTime } = useRef(getDayTime());

  useEffect(() => {
    setDeliveryMent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDeliveryMent = () => {
    const dayOfWeek = getDayOfWeek();

    switch (dayOfWeek) {
      case "월":
      case "화":
      case "수":
      case "목":
      case "금":
        displayDeliveryInfo(true, "weekday");
        break;
      case "토":
        displayDeliveryInfo(false, "saturday");
        break;
      case "일":
        displayDeliveryInfo(true, "sunday");
        break;
    }
  };

  const displayDeliveryInfo = (isTimer: boolean, week: string) => {
    switch (method) {
      case "parcel":
        if (isTimer && nowTime >= 1130 && nowTime < 1700) timer();

        if (week === "weekday") {
          setDeliveryInfo({ name: "택배주문", description: "택배 주문 17시까지 주문 시 당일 발송" });
        } else if (week === "saturday") {
          setDeliveryInfo({ name: "택배주문", description: "택배 주문 화요일 발송" });
        } else if (week === "sunday") {
          setDeliveryInfo({ name: "택배주문", description: "택배 주문 17시까지 주문 시 화요일 발송" });
        }
        break;
      case "morning":
        if (isTimer && nowTime >= 1630 && nowTime < 1700) timer();

        if (week === "weekday") {
          setDeliveryInfo({ name: "새벽주문", description: "새벽 주문 17시까지 주문 시 다음날 새벽 7시 전 도착" });
        } else if (week === "sunday") {
          setDeliveryInfo({ name: "새벽주문", description: "새벽 주문 화요일 새벽 7시 전 도착" });
        } else if (week === "saturday") {
          setDeliveryInfo({ name: "새벽주문", description: "새벽 주문 17시까지 주문 시 화요일 새벽 7시 전 도착" });
        }
        break;
    }
  };

  return { deliveryInfo, countdownTime };
};
export default useDeliveryType;
