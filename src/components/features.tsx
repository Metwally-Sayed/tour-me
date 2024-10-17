import React from "react";

const features = () => {
  return (
    <div
      id="features"
      className="bg-[#c8e6e8] 2xl:px-[350px] xl:px-[200px] p-[40px] flex flex-col justify-center items-center"
    >
      <div className="lg:w-[600px]">
        <h2 className=" text-white font-[400] text-[35px] lg:leading-[43px] lg:p-10 py-5  ">
          TourMe Features:{" "}
        </h2>
        <div className="lg:w-[935px] text-aqua font-[400] w-full flex flex-col justify-center">
          <p>
            <span className="font-[700] ">Easy Access:</span>
            Tourists can easily access tourist information, directions, and
            recommendations through the app on their smartphones.
          </p>
          <p>
            <span className="font-[700] ">Comprehensive Information:</span>
            The app offers detailed and comprehensive information about tourist
            destinations, including history, local culture, popular cuisine,
            events, and recreational activities.
          </p>
          <p>
            <span className="font-[700] ">Experience Sharing:</span>
            Users can share their travel experiences and reviews with other
            tourists within and outside the country.
          </p>
          <p>
            <span className="font-[700] ">Regular Updates:</span>
            The app is regularly updated to provide the latest information and
            updates on tourist sites, events, and other changes.
          </p>
          <p>
            <span className="font-[700] ">Local Tour Guides:</span>
            The app allows tourists to connect with local tour guides with or
            without a car based on their request.
          </p>
          <p>
            <span className="font-[700] ">Easy Planning and Organization:</span>
            Users can easily search for accommodations, restaurants, and tourist
            landmarks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default features;
