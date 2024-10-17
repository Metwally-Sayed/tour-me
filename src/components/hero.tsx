import Image from "next/image";
import React from "react";
const imageUrl = "/hero.png";

const Hero = () => {
  return (
    <div
    className="flex justify-center items-center bg-cover bg-center bg-no-repeat mt-20"
    // style={{
    //   backgroundImage: `url(${imageUrl})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   width: "100%",
    //   height: "660px",
    // }}
    >
      <Image src={imageUrl} height={660} width={2550} alt="" />
    </div>
  );
};

export default Hero;
