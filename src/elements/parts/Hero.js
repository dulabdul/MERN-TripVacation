import React from "react";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHeroFrame from "assets/images/img-hero-frame.jpg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/button";
import formatNumber from "utils/formatNumber";
export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offfsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <section className="container pt-5">
      <div className="row align-items-center">
        <div className="col-6 pe-5">
          <h1 className="fw-bold mb-3 text-capitalize">
            Forget busy work,
            <br />
            start next holiday
          </h1>
          <p
            className="mb-4 pt-3 fw-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 mb-2 "
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="pt-5 icons-hero row align-items-end justify-content-between">
            <div className="col-auto text-center">
              <img
                src={IconTraveler}
                width="36"
                height="36"
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-2 fw-bold">
                {formatNumber(props.data.travelers)}
                <span className="text-gray-500 fw-light"> Travelers</span>
              </h6>
            </div>
            <div className="col-auto text-center">
              <img
                src={IconCities}
                width="36"
                height="36"
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-2 fw-bold">
                {formatNumber(props.data.cities)}
                <span className="text-gray-500 fw-light"> Cities</span>
              </h6>
            </div>
            <div className="col-auto text-center">
              <img
                src={IconTreasure}
                width="36"
                height="36"
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-2 fw-bold">
                {formatNumber(props.data.treasures)}
                <span className="text-gray-500 fw-light"> Treasures</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 ps-5">
          <div style={{ width: 520, height: 420 }}>
            <img
              src={ImgHero}
              className="img-fluid position-absolute"
              alt="Hero Image"
              style={{
                margin: "0 0 0 -30px",
                width: 520,
                height: 420,
                zIndex: 1,
              }}
            />
            <img
              src={ImgHeroFrame}
              className="img-fluid position-absolute"
              alt="Hero Image Frame"
              style={{ margin: "30px -15px -15px 0", width: 520, height: 420 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
