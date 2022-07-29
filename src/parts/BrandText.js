import Button from "elements/button";
import React from "react";
export default function BrandText(props) {
  if (props.isMarginAuto)
    return (
      <Button className="brand-icon-text fw-bold mx-auto" type="link" href="">
        Trip<span className="text-gray-900">Vacation.</span>
      </Button>
    );
  return (
    <Button className="brand-icon-text fw-bold" type="link" href="">
      Trip<span className="text-gray-900">Vacation.</span>
    </Button>
  );
}
