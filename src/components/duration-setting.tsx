//import dynamic from "next/dynamic";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
// const Button = dynamic(
//   async () => {
//     const module = await import("src/components/Button");
//     return module.Button;
//   },
//   {
//     ssr: false,
//     loading: () => {
//       return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
//     },
//   },
//);

const DurationSetting = () => {
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
              />
              <p className="text-2xl mt-12">Day</p>
              <input
                type="number"
                className="w-16 h-14 border-2 border-glay-500 rounded-lg text-center text-4xl mx-1 mt-6"
                max={23}
                min={0}
              />
              <p className="text-2xl mt-12 w-12">Hour</p>
            </div>

            <div className="h-10 w-40 m-auto mt-4">
              <button className="w-40 h-10 bg-gray-500 text-white rounded-lg">Set</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationSetting;