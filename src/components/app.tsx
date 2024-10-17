import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <div
      id="app"
      className="flex flex-col lg:flex-row bg-[#C8E6E8] lg:h-[952px] 2xl:px-[350px] xl:px-[200px] xl:py-[100px] gap-10 lg:gap-0 p-10"
    >
      <div className="w-full lg:w-1/2 flex flex-col xl:gap-[50px] gap-10">
        <div className="h-1/2 flex lg:justify-start justify-center items-center">
          <h1 className="text-aqua lg:text-[62px] text-[35px] lg:w-[328px] lg:leading-[81px] lg:pl-1 text-center lg:text-start">
            Explore the World with TourMe
          </h1>
        </div>
        <div className=" flex justify-start items-start gap-3 h-1/2">
          <Image src={"/apple.png"} width={144} height={43} alt="apple" />
          <Image src={"/google.png"} width={144} height={43} alt="google" />
        </div>
      </div>
      <div className=" w-full flex flex-col lg:items-end items-center justify-start lg:w-1/2 ">
        <div className=" relative border-[10px] border-aqua rounded-3xl">
          <Image
            className="rounded-xl"
            src={"/about1.png"}
            width={462}
            height={666}
            alt=""
          />
        </div>
        <div className=" hidden xl:block absolute  border-[10px] border-aqua rounded-3xl w-[231px] 4xl:-bottom-[600px] 2xl:-bottom-[700px] xl:-bottom-[950px]  4xl:right-[550px] 2xl:right-[300px] xl:right-[500px] ">
          <Image
            className="rounded-xl"
            src={"/about2.png"}
            width={231}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
