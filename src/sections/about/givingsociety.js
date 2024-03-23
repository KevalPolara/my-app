import React from "react";
import Image from "next/image";

const Givingsociety = () => {
  return (
    <section>
      <div className="bg-[url('/lineargradient.png')] bg-no-repeat pt-[100px] sm:px-[100px] px-[20px] w-full bg-cover">
        <div className="max-w-[1240px] mx-auto">
          <p className="font-[400] text-[20px] text-[#171326] sm:text-left text-center">
            ABOUT
          </p>
          <h2 className="font-[600] sm:text-[48px] text-[40px] sm:text-left text-center leading-[52px] max-w-[1134px] mt-[16px]">
            At GivingSociety, We enable brands to make a meaningful social
            impact and offer consumers a unique giving experience, all while
            increasing non-profit contributions without the costly fees.
          </h2>
          <div className="flex flex-wrap justify-between">
            <div className="max-w-[463px] mt-[50px] text-[16px] sm:text-left text-center text-[#171326] font-[400]">
              <p>
                We're pioneering the landscape of cause-related marketing and
                social commerce fundraising, empowering brands to deliver
                lasting social impact, and offering consumers an exceptional
                giving experience.
              </p>

              <br />
              <p>
                Say goodbye to hefty fees and hello to boosted non-profit
                contributions and micro-donations directly benefiting the causes
                you care about.
              </p>

              <br />

              <p>
                Our software seamlessly integrates into your store, making it
                easy for you to support charitable ensdeavors while driving
                customer engagement and loyalty.
              </p>
            </div>

            <div className="sm:block hidden"></div>

            <Image
              src="/menwithlove.png"
              alt="This is a HandFigure Releted Image"
              height={320}
              width={355}
            />

            <div className="sm:block hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Givingsociety;
