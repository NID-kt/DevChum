const Buddy = () => {
  return (
    <div className="pb-4 border-b border-gray-300 w-60 h-72">
      <h1 className="text-xl font-bold whitespace-nowrap mb-2 border-b border-gray-300">
        Your buddy
      </h1>
      <img src="./images/buddy/gif0047.gif" alt="buddy" className="w-60 h-60" />
      
    </div>
  );
};

export default Buddy;

// 死んでいる場合のコード(imgタグと挿し変える)
{/* <div className="w-60 h-60 border border-gray-500 rounded-lg mt-8">
  <p className="text-center text-l mt-4">でぶちゃむがいなくなっちゃった...😿</p>
  <img src="./images/grave.png" alt="buddy" className="w-36 h-36 m-auto mt-8" />
</div> */}