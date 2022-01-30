import React from "react";

import StateCarousel from "./Europe";
import PackageCarousel from "./Package";

const Home = () => {
  return (
    <>
      <div></div>
      <div className="text-center" style={{ marginTop: "5rem" }}>
        <h1>Europe</h1>
        <a
          href="https://pay-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Book Now Europe
        </a>
        <StateCarousel />
      </div>
      <div className="text-center">
        <h1>South Asia</h1>
        <a
          href="https://pay-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Book Now South Asia
        </a>
        <PackageCarousel />
      </div>
    </>
  );
};

export default Home;
