import Betterworld from "@/sections/about/betterworld";
import Consumer from "@/sections/about/consumer";
import Givingsociety from "@/sections/about/givingsociety";
import Givingsocietystories from "@/sections/about/givingsocietystories";
import Goodtoknow from "@/sections/about/goodtoknow";
import Joiningsociety from "@/sections/about/joiningsociety";
import Movement from "@/sections/about/movement";
import Ourteam from "@/sections/about/ourteam";
import React from "react";

const About = () => {
  return (
    <div>
      <Betterworld />
      <Givingsociety />
      <Consumer />
      <Movement />
      <Givingsocietystories />
      <Goodtoknow />
      <Ourteam/>
      <Joiningsociety/>
    </div>
  );
};

export default About;
