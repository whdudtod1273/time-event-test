import { useState } from "react";

const useTimer = () => {
  const [countdownTime, setCountdownTime] = useState("");
  const timer = () => {
    const countdown = () => {
      const currentTime = new Date();
      const minutes = currentTime.getMinutes();

      const targetTime = new Date(currentTime);
      if (minutes < 30) {
        targetTime.setMinutes(30);
      } else {
        targetTime.setHours(targetTime.getHours() + 1);
        targetTime.setMinutes(0);
      }
      targetTime.setSeconds(0);

      const remainingTime = targetTime.getTime() - currentTime.getTime();

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        console.log("카운트다운 종료");
        return;
      }

      const minutesLeft = Math.floor(remainingTime / (1000 * 60));
      const secondsLeft = Math.floor((remainingTime / 1000) % 60);

      setCountdownTime(`${minutesLeft}분 ${secondsLeft}초 남음`);
    };

    const intervalId = setInterval(countdown, 1000);
  };
  return { timer, countdownTime };
};
export default useTimer;
