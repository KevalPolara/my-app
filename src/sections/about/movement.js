import React from "react";

const Movement = () => {
  return (
    <section>
      <div className="bg-[#8D6DFE] sm:pl-[40px] xl:pl-[100px] md:pl-[40px] pl-[20px] md:pr-[40px] sm:pr-[208px] pr-[20px] py-[70px]">
        <h5 className="font-[600] text-[48px] text-white sm:text-left text-center">
          Join the movement
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="lg:mx-0 mx-auto">
            <p className="font-[600] sm:text-[48px] text-[40px] mt-[43px] text-white flex items-normal">
              <span className="text-[26px]">+</span>
              $485 Billion
            </p>
            <p className="sm:text-left text-center font-[500] text-[12px] mt-[18px] text-white">
              Total raised this year
            </p>
          </div>
          <div className="lg:mx-0 mx-auto">
            <p className="font-[600] sm:text-[48px] text-[40px] mt-[43px] text-white flex items-normal">
              <span className="text-[26px] mr-[10px]">+</span>
              28%
            </p>
            <p className="font-[500] text-[12px] mt-[18px] text-white">
              Conversion Rate Increase
            </p>
          </div>

          <div className="sm:mx-0 mx-auto">
            <p className="font-[600] sm:text-[48px] text-[40px] mt-[43px] text-white flex items-normal">
              <span className="text-[26px] mr-[10px]">+</span>
              $100%
            </p>
            <p className="font-[500] text-[12px] mt-[18px] sm:text-left text-center text-white">
              Goes To Charity
            </p>
          </div>
          <div className="lg:mx-0 mx-auto">
            <p className="font-[600] sm:text-[48px] text-[40px] mt-[43px] text-white flex items-normal">
              <span className="text-[26px] mr-[10px]">+</span>
              29.7%
            </p>
            <p className="font-[500] text-[12px] mt-[18px] sm:text-left text-center text-white">
              Avg. Brands Participation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
