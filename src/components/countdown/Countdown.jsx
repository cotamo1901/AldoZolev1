import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date('December 25, 2023 00:00:00');
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      return { days, hours, minutes };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
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
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xl px-4 md:max-w-full"> 
        <div className="bg-gray-200 border rounded p-8 w-full">
          <h2 className="text-2xl font-bold mb-4">La cuenta regresiva ha comenzado en:</h2>
          <div className="flex justify-end mb-4">
            <p className="text-sm text-gray-500">Conéctate a este viaje sonoro</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-xs uppercase text-gray-600">días</div>
            </div>
            <div className="mx-2"></div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs uppercase text-gray-600">horas</div>
            </div>
            <div className="mx-2"></div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs uppercase text-gray-600">minutos</div>
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
