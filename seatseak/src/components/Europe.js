import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import red_fort from "../assets/img/delhi/red_fort.jpg";
import rajasthan from "../assets/img/rajasthan/bg.jpg";
import odisha from "../assets/img/odisha/bg.jpg";
function StateCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <Carousel breakPoints={breakPoints} className="top-states">

      
      <Link className="px-3 nav-link state" to="#">
        <div className="card">
          <img src={odisha} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Iceland</h3>
            <p className="card-text text-muted text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius officia ut quibusdam recusandae in? Dolores quo sint ipsam, eum error tempore, excepturi facilis esse doloribus libero nulla atque, molestiae eaque?
            </p>
           
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="#">
   

        <div className="card">
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h2>Tatra Mountains</h2>
            <p className="card-text text-muted text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit vitae numquam nulla repellendus, est quos id deleniti fuga. Sunt vitae quos maxime voluptatum veniam laboriosam reprehenderit harum cumque suscipit?
            </p>
          </div>
        </div>
      </Link>
      
      <Link className="px-3 nav-link state" to="#">
        <div className="card">
          <img src={odisha} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Dolomites</h3>
            <p className="card-text text-muted text-left">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio laborum eligendi debitis veritatis quisquam molestiae cupiditate quam expedita vel voluptates eius tempore unde sint sapiente, voluptatem numquam facilis? Deserunt, maiores?
            </p>
          </div>
        </div>
      </Link>
    </Carousel>
  );
}

export default StateCarousel;
