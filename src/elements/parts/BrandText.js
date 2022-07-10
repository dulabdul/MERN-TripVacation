import React from "react";
import Button from "elements/button";

export default function BrandText() {
  return (
    <Button className="brand-icon-text fw-bold" type="link" href="">
      Trip<span className="text-gray-900">Vacation.</span>
    </Button>
  );
}
