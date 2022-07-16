import Button from "elements/button";
import React from "react";
import BrandText from "./BrandText";
export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <BrandText />
            <p className="text-gray-500 mt-2">
              We kaboom your beauty holiday instanly and memorable
            </p>
          </div>
          <div className="col-2 ms-5">
            <h6 className="fw-bold">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Star Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment">
                  Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3 ms-5">
            <h6 className="fw-bold">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy-us">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="fw-bold">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@tripvacation.com"
                >
                  support@tripvacation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="teL:+6289675293838">
                  +62896-7529-3838
                </Button>
              </li>
              <li className="list-group-item">
                <span>Jakarta Utara, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright align-items-center">
            <p>Copyright 2022 • All Right Reserved • TripVacation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
