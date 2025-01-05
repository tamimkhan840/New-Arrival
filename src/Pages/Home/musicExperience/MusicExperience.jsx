import React, { useEffect, useState } from 'react'
import music from '../../../assets/Images/music expreence.png'
function MusicExperience() {

    // Timer functionality
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    
    return (
        <div className="my-6 bg-white">
            <div className="flex flex-col items-center justify-between p-8 text-white bg-black rounded-lg md:flex-row md:items-start">
                <div className="space-y-9">
                    <p className="mb-4 text-green-500">Categories</p>
                    <h1 className="mb-4 text-4xl font-bold">Enhance Your <br />Music Experience</h1>
                    <div className="flex gap-4 text-center ">
                        {Object.entries(timeLeft).map(([key, value], index) => (
                            <div key={index} className="flex flex-col items-center w-16 h-16 text-lg text-black bg-white rounded-full ">
                                <span className="mt-1 text-2xl font-bold">{String(value).padStart(2, "0")}</span>
                                <span className="text-sm ">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            </div>
                        ))}
                    </div>
                    <button className="px-6 py-2 text-white bg-green-500 rounded-lg">Buy Now!</button>
                </div>
                <div className="mt-8 md:w-1/2 md:mt-0 md:ml-8">
                    <img src={music} alt="Black portable speaker with a handle and a red logo in the center" className="rounded-lg shadow-2xl " />
                </div>
            </div>
        </div>
    )
}

export default MusicExperience