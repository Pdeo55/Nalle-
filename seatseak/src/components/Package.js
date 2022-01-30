import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import red_fort from "../assets/img/delhi/red_fort.jpg";
import rajasthan from "../assets/img/rajasthan/bg.jpg";
import odisha from "../assets/img/odisha/bg.jpg";
function PackageCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/states/Odisha">
        <div className="card">
          <img src={odisha} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Thailand</h3>
            <p className="card-text text-muted text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi expedita dicta vero placeat sed eius quam necessitatibus neque ea aut beatae reprehenderit deserunt dolorum esse assumenda, cumque est omnis?
            </p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Delhi">
        <div className="card">
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h2>Cambodia</h2>
            <p className="card-text text-muted text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe culpa corrupti cum nobis, doloremque quis voluptates nam vero atque assumenda eos repudiandae amet animi asperiores reiciendis iusto voluptate? Numquam.
            </p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Rajasthan">
        <div className="card">
          <img src={rajasthan} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Malaysia</h3>
            <p className="card-text text-muted text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum necessitatibus optio iure. Dolorum minus pariatur dolor autem in, eligendi quas iusto temporibus beatae, dolore libero unde, deleniti maiores et.
            </p>
          </div>
        </div>
      </Link>
     
    </Carousel>
  );
}

export default PackageCarousel;
