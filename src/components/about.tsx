import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#C8E6E8] flex flex-col 2xl:px-[350px] xl:px-[200px] p-10 lg:flex-row"
    >
      <div className="lg:w-1/3">
        <h2 className=" text-white font-[400] text-[43px] lg:leading-[67px] ">
          About Us{" "}
        </h2>
      </div>
      <div className="lg:w-2/3 flex flex-col lg:gap-10 ">
        <div className="flex flex-col ">
          <p className=" text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Institution Vision, Mission, and Strategy for TourMe:
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Vision: The app aims to lead and excel in serving both local and
            international tourists.{" "}
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Mission: The app seeks to gain customer satisfaction and trust,
            continually developing with the latest web and artificial
            intelligence technologies to serve tourism and tourists.
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Strategy: The app aims to grow in tourism service by expanding its
            base of tourists and tour guides and enhancing their service in
            every tourist destination.
          </p>
        </div>
        <div className="flex flex-col ">
          <p className=" text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Goals:{" "}
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Encourage safe tourism in general.
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Support local production and the national economy and contribute to
            boosting the tourism economy.
          </p>
          <p className=" pl-3 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
            Create new job opportunities and localize them in the tourism sector
            and in the ongoing development of the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
