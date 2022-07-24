import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PagesDetailDescription({ data }) {
  return (
    <section className="detail-description">
      <h3 className="h4">About the place</h3>
      {ReactHtmlParser(data.description)}
      {/* {data.description} */}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              className="col-3 text-center"
              key={`feature-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                className="d-block mb-2 "
                width="38"
                height="38"
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 fw-light">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
