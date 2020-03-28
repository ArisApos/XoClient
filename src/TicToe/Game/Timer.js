import React, { useState, useEffect } from "react"


const Timer = ({ gameId, timeLimmit, xIsNext, losePointsDis }) => {
  const [clock, setClock] = useState(timeLimmit / 1000);

  const timerClassName = (clock) => {
    const tickPersentage = clock / (timeLimmit / 1000);
    switch (true) {
      case tickPersentage > 0.75:
        return { color: "green" };
      case tickPersentage > 0.5:
        return { color: "yellow" };
      case tickPersentage > 0.25:
        return { color: "orange" };
      case tickPersentage >=0 :
        return { color: "red" };
      default:
        return null;
    }
  };
  const losePoints = (firstCall, countDownValue) => {
    if (!firstCall && countDownValue === 0) {
      const plyaerXO = xIsNext ? "X" : "O";
      losePointsDis(gameId, plyaerXO, 0.5);
    }
  };
  useEffect(() => {
    let timeLimmitSeconds = timeLimmit / 1000;
    let tickInterval = 1;
    let firstCall = true;
    let idTickTock;

    const tickTock = () =>
      setInterval(() => {
          const countDownValue = timeLimmitSeconds - (tickInterval++ % (timeLimmitSeconds+1));
          setClock(countDownValue);
          losePoints(firstCall, countDownValue); 
        if (firstCall) firstCall = !firstCall;
      }, 1000);
    idTickTock=tickTock();
    // Specify how to clean up after this effect:
    return ()=>{ clearInterval(idTickTock); setClock(timeLimmit / 1000); };
  }, [xIsNext]);

  return (
    <span className={xIsNext ? "timer" : "timer oIsNext"} style={timerClassName(clock)}>
      {clock}
    </span>
  );
};

export { Timer }