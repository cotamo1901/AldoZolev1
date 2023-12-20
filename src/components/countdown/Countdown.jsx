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
    <div className="flex justify-center items-center h-[86dvh]">
      <div className="w-full max-w-xl px-4 md:max-w-full">
        <div className="bg-gray-200 border rounded p-8 w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#613625]">
            La cuenta regresiva ha comenzado en:
          </h2>
          <div className="flex justify-start mb-4 font-bold">
            <p className="text-sm text-[#ba5f4d] text-left">
              Conéctate a este viaje sonoro
            </p>
          </div>
          <div className="flex  justify-center gap-1 items-center ">
            <div className="bg-gray-200 rounded-lg">
              <div className="text-5xl font-bold text-center text-[#613625] px-5 py-5 bg-gray-300 rounded-lg">
                {timeLeft.days}
              </div>
              <div className="text-xs uppercase text-[#613625] font-bold">
                días
              </div>
            </div>
            <span className="text-4xl uppercase text-[#613625] font-bold pl-4 pb-5">
              :
            </span>
            <div className="mx-2"></div>
            <div className=" p-4 ">
              <div className="text-5xl font-bold text-center text-[#613625]  px-5 py-5 bg-gray-300 rounded-lg">
                {timeLeft.hours}
              </div>
              <div className="text-xs uppercase text-[#613625]  font-bold">
                horas
              </div>
            </div>
            <span className="text-4xl uppercase text-[#613625] font-bold pl-4 pb-5">
              :
            </span>
            <div className="mx-2"></div>
            <div className="bg-gray-200 rounded-lg">
              <div className="text-5xl font-bold text-center text-[#613625] px-5 py-5 bg-gray-300 rounded-lg">
                {timeLeft.minutes}
              </div>
              <div className="text-xs uppercase text-[#613625] font-bold">
                minutos
              </div>
            </div>
            <span className="text-4xl uppercase text-[#613625] font-bold pl-4 pb-5">
              :
            </span>
            <div className="mx-2"></div>
            <div className="bg-gray-200  rounded-lg">
              <div className="text-5xl font-bold text-center text-[#613625]  px-5 py-5 bg-gray-300 rounded-lg">
                {timeLeft.seconds}
              </div>
              <div className="text-xs uppercase text-[#613625] font-bold">
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
