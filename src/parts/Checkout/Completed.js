import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIlustration from "assets/images/completed-img.png";
export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIlustration}
              alt="Completed Checkout Ilustration"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
