import React from "react";
import Herosec from "../components/Herosec";
import Industrysec from "../components/Industrysec";
import Purpose from "../components/Purpose";
import Software from "../components/Software";
import MissionVision from "../components/MissionVision";
import Slider from "../components/Slider";
import WhyChoose from "../components/WhyChoose";
import ContactForm from "../components/ContactForm ";

function Home() {
  return (
    <>
      <Herosec />
      <Industrysec />
      {/* <Purpose /> */}
      <Software />
      <WhyChoose />
      <MissionVision />     
      <Slider />
     <ContactForm/>
    </>
  );
}

export default Home;
