import React from "react";
import CountUp from "react-countup";

const Counters = () => {
  const data = [
    { count: 3, label: "Years of Experience", bgColor: "bg-teal-100" },
    { count: 25, label: "Project Completed", bgColor: "bg-amber-100" },
    { count: 20, label: "Happy Clients", bgColor: "bg-green-100" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${item.bgColor} rounded-lg shadow-lg p-6 flex flex-col items-center`}
        >
          <h2 className="text-4xl font-bold text-indigo-900">
            <CountUp start={0} end={item.count} duration={2.0} />+
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            {item.label.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counters;
