import Image from "next/image";
import React from "react";

const Cuaca = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-7xl">
          {(data.main.temp.toFixed(0) - 32) / (1.8).toFixed(0)}&#176; C
        </p>
      </div>
      {/* Bottom */}

      <div className=" mb-20 bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Cuaca di {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2-xl">
              {(data.main.feels_like.toFixed(0) - 32) / (1.8).toFixed(0)}&#176;
              C
            </p>
            <p className="text-xl">Terasa Seperti</p>
          </div>
          <div>
            <p className="font-bold text-2-xl">{data.main.humidity}%</p>
            <p className="text-xl">Kelembapan</p>
          </div>
          <div>
            <p className="font-bold text-2-xl">
              {data.wind.speed.toFixed(0)}MPH
            </p>
            <p className="text-xl">Kecepatan Angin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuaca;
