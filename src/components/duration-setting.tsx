import React, { useState, useEffect } from "react";

const DurationSetting = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    chrome.storage.sync.get(["duration_days", "duration_hours"], (result) => {
      setDays(result.duration_days || 0);
      setHours(result.duration_hours || 0);
    });
  }, []);

  const handleSetDuration = () => {
    chrome.storage.sync.set({ duration_days: days, duration_hours: hours });
  };

  return (
    <div className="pb-4 border-b border-gray-300 w-60 h-72">
      <h1 className="text-xl font-bold whitespace-nowrap border-b border-gray-300">Duration</h1>
      <div className="w-60 h-60 border border-gray-500 rounded-xl mt-2">
        <div className="w-auto text-center text-xl">
          <p className="">Set your duration</p>
          <div className="w-60 h-52 border-glay-500 rounded-lg text-center text-xl mt-2 pb-10 pt-4 justify-center">
            <div className="w-auto h-20 flex justify-center">
              <input
                type="number"
                className="w-10 h-14 border-2 border-glay-500 rounded-lg text-center text-4xl mx-1 mt-6"
                max={6}
                min={0}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              />
              <p className="text-2xl mt-12">Day</p>
              <input
                type="number"
                className="w-16 h-14 border-2 border-glay-500 rounded-lg text-center text-4xl mx-1 mt-6"
                max={23}
                min={0}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <p className="text-2xl mt-12 w-12">Hour</p>
            </div>

            <div className="h-10 w-40 m-auto mt-4">
              <button
                className="w-40 h-10 bg-gray-500 text-white rounded-lg"
                onClick={handleSetDuration}
              >
                Set
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationSetting;
