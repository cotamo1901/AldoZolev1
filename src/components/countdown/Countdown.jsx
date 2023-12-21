import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date("December 25, 2023 00:00:00");
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center sm:h-[36dvh] h-[48dvh]">
      <div className="w-full max-w-xl sm:px-1 min-w-full ">
        <div className="  p-3 sm:p-[1.3rem]  w-auto border-2	   border-stone-200	 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-[#613625]">
            La cuenta regresiva ha comenzado en:
          </h2>
          <div className="flex justify-start mb-4 font-bold">
            <p className="text-sm text-[#ba5f4d] text-left">
              Conéctate a este viaje sonoro
            </p>
          </div>
          <div className="flex  justify-center sm:gap-1 gap-0 items-center ">
            <div className=" rounded-lg bg-gray-200 text-center  ms:px-5 px-2 sm:py-5 py-3">
              <div className="sm:text-5xl text-2xl font-bold  text-[#613625]">
                {timeLeft.days}
              </div>
              <div className="sm:text-xs text-[.50rem] uppercase text-[#613625] font-bold ">
                días
              </div>
            </div>
            <span className="sm:text-4xl text-2xl uppercase text-[#613625] font-bold sm:pl-4 pl-1 sm:pb-5 pb-1">
              :
            </span>
            <div className="mx-2"></div>
            <div className=" rounded-lg bg-gray-200 text-center  ms:px-5 px-2 sm:py-5 py-3">
              <div className="sm:text-5xl text-2xl font-bold  text-[#613625]">
                {timeLeft.hours}
              </div>
              <div className="sm:text-xs text-[.50rem] uppercase text-[#613625] font-bold ">
                horas
              </div>
            </div>
            <span className="sm:text-4xl text-2xl uppercase text-[#613625] font-bold sm:pl-4 pl-1 sm:pb-5 pb-1">
              :
            </span>
            <div className="mx-2"></div>
            <div className=" rounded-lg bg-gray-200 text-center  ms:px-5 px-2 sm:py-5 py-3">
              <div className="sm:text-5xl text-2xl font-bold  text-[#613625]">
                {timeLeft.minutes}
              </div>
              <div className="sm:text-xs text-[.50rem] uppercase text-[#613625] font-bold ">
                minutos
              </div>
            </div>
            <span className="sm:text-4xl text-2xl uppercase text-[#613625] font-bold sm:pl-4 pl-1 sm:pb-5 pb-1">
              :
            </span>
            <div className="mx-2"></div>
            <div className=" rounded-lg bg-gray-200 text-center  ms:px-5 px-2 sm:py-5 py-3">
              <div className="sm:text-5xl text-2xl font-bold  text-[#613625]">
                {timeLeft.seconds}
              </div>
              <div className="sm:text-xs text-[.50rem] uppercase text-[#613625] font-bold ">
                segundos
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <button className="bg-[#ba5f4d] text-white px-4 py-2 rounded">
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
