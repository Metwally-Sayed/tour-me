/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
const Idea = () => {
  return (
    <div id="idea" className="bg-[#c8e6e8] 2xl:px-[500px] xl:px-[200px] xl:py-[100px] p-10 flex flex-col gap-10">
      <div className="bg-white h-[381px] p-10 flex flex-col lg:flex-row gap-10 lg:gap-0 ">
        <div className=" lg:flex justify-start items-center lg:w-1/2 w-full">
          <h1 className="text-aqua 4xl:text-[62px] lg:text-[40px] text-[30px] text-center lg:text-start  lg:w-[328px] 4xl:leading-[81px] xl:leading-[51px] leading-7 lg:pl-1">
            Revolutionizing Travel Experiences{" "}
          </h1>
        </div>
        <div className=" flex justify-end items-center lg:w-1/2 w-full">
          <Image src={"/videoimg.png"} width={534} height={299} alt="" />
        </div>
      </div>
      <div>
        <div className=" flex flex-col w-full  items-center">
          <div>
            <h2 className=" text-white font-[700] text-[30px] leading-[47px]">
              What is the TourMe App?
            </h2>
            <p className=" text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
              TourMe is a promising electronic application specialized in
              tourism. Its goal is to provide local tour guides, with or without
              a car, to help introduce local and international tourists to the
              country, attract them, and accompany them in visiting various
              regions and experiencing tourism, cultural, and historical
              attractions in different villages and cities.
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-full  items-start pt-20">
          <div>
            <h2 className=" text-white font-[700] text-[30px] leading-[47px]">
              TourMe App Idea?
            </h2>
            <p className=" text-aqua font-[400] text-[13px] leading-[28px] lg:w-[910px]">
              TourMe offers a comprehensive electronic environment on IOS and
              Android, providing detailed tourist information about
              destinations. It connects tourists with tour guides in all tourist
              areas across villages and cities. The app delivers information
              about famous tourist sites, local culture and history, local
              cuisine and folk dances, events and festivals, recreational
              activities, monuments, accommodations, natural attractions, and
              other tourist facilities.
            </p>
          </div>
        </div>{" "}
      </div>
      <div>
        <h2 className=" text-white font-[700] text-[30px] lg:leading-[47px] text-center">
          Core Services Provided by TourMe{" "}
        </h2>
        <div className=" flex lg:flex-row flex-col lg:mt-32 mt-10 gap-10 lg:gap-0 justify-between">
          <div className="flex flex-col lg:gap-10 justify-center items-center  gap-2 ">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center gap-5 ">
              <FaUser size={20} color="white" />
              <h3 className="text-aqua font-[700] text-[19px] leading-[30px]">
                Providing Tour Guides
              </h3>
            </div>
            <p className=" text-aqua font-[400] text-[13px] leading-[28px] w-[352px] text-center lg:text-start">
              The app provides local and international tourists with access to
              detailed and reliable information about the country and tourist
              sites through a guide who accompanies them.
            </p>
          </div>
          <div className="flex flex-col lg:gap-10 justify-center items-center  gap-2 ">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center gap-5 ">
              <GiRoundStar size={20} color="white" />
              <h3 className="text-aqua font-[700] text-[19px] leading-[30px]">
                Preferences for Trips{" "}
              </h3>
            </div>
            <p className=" text-aqua font-[400] text-[13px] leading-[28px] w-[352px] text-center lg:text-start">
              Users can select preferences for trips, whether with or without a
              car, and search for specific guide information according to their
              needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-20 lg:mt-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="lg:w-1/2 flex flex-col lg:justify-evenly 2xl:h-[300px] ">
              <h3 className=" text-aqua font-[400] text-[25px] leading-[39px]">
                Social and Environmental Impact Analysis:
              </h3>
              <div>
                <p className="text-aqua text-[13px] font-[400] leading-[16px] lg:w-[555px]">
                  1.Boosting Tourism: Increase the number of visitors exploring
                  different tourist destinations, contributing to the country's
                  economy.
                </p>
                <p className="text-aqua text-[13px] font-[400] leading-[16px] lg:w-[555px]">
                  2.Reliable Information: Provide trustworthy and comprehensive
                  information about the country, enhancing cultural and
                  historical awareness.
                </p>{" "}
                <p className="text-aqua text-[13px] font-[400] leading-[16px] lg:w-[555px]">
                  3.Travel Planning: Facilitate travel and exploration planning,
                  offering advice on tourist sites and suitable activities.
                </p>
              </div>
            </div>
            <div className=" lg:w-1/2 flex justify-end items-center">
              <Image src={"/f1.png"} height={613} width={297} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className=" border-[10px] border-aqua rounded-3xl lg:w-[565px] lg:-bottom-[600px] lg:right-[550px]">
              <Image
                className="rounded-xl"
                src={"/f2.png"}
                height={262}
                width={565}
                alt=""
              />
            </div>
            <div className=" lg:pl-20 flex flex-col gap-5 lg:gap-0 mt-5">
              <p className=" pl-2 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
                Social Interaction: Enhance social interaction among tourists by
                enabling them to share experiences and reviews of guides and
                tourist sites.
              </p>{" "}
              <p className=" pl-2 text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
                Tourism Sector Growth: Strengthen the tourism sector and create
                new job opportunities for citizens in the tourism sector within
                the country.
              </p>{" "}
              <p className=" text-aqua font-[400] text-[13px] leading-[28px] lg:w-[578px]">
                Job Opportunities for Graduates: Provide new job opportunities
                for outstanding graduates within the institution to develop the
                app and employ AI technologies
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
