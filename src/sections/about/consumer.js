import React from "react";
import Image from "next/image";

const Consumer = () => {
  return (
    <section>
      <div className="flex flex-wrap max-w-[1240px] mx-auto justify-between sm:py-[151px] py-[70px]">
        <div>
          <Image
            src="/formkit_people.png"
            alt="This is a HandFigure Releted Image"
            height={44}
            width={41}
            className="mx-auto"
          />

          <h5 className="text-[24px] text-center font-[700] text-[#171326] mt-[15px]">
            Consumers
          </h5>

          <p className="max-w-[318px] text-center text-[16px] font-[400] text-[#171326]  mt-[21px]">
            Discover a new way to give back beyond the shopping cart. Our
            catalog allows you to directly connect and donate to your favorite
            cause. Be a part of the change you wish to see in the world.
          </p>
        </div>

        <div className="sm:mt-0 mt-[40px]">
          <Image
            src="/solar_user-heart-linear.png"
            alt="This is a HandFigure Releted Image"
            height={44}
            width={41}
            className="mx-auto"
          />

          <h5 className="text-[24px] text-center font-[700] text-[#171326] mt-[15px]">
            Brands
          </h5>

          <p className="max-w-[318px] text-center text-[16px] font-[400] text-[#171326] mt-[21px]">
            Seamlessly integrate social impact into your business model.
            Leverage our suite of tools and apps to magnify your influence and
            cultivate brand loyalty while you contribute to society.
          </p>
        </div>

        <div className="xl:mt-0 mt-[40px] sm:mx-auto xl:mx-0">
          <Image
            src="/icon-park-outline_degree-hat.png"
            alt="This is a HandFigure Releted Image"
            height={44}
            width={41}
            className="mx-auto"
          />

          <h5 className="text-[24px] text-center font-[700] text-[#171326] mt-[15px]">
            Non-profits
          </h5>

          <p className="max-w-[318px] text-center text-[16px] font-[400] text-[#171326] mt-[21px]">
            Expand your donor network and diversify your fundraising sources.
            Connect with socially conscious consumers and brands eager to make a
            difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consumer;
