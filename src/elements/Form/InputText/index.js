import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";
export default function InputText(props) {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;
  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };
    if (type === "email") {
      if (!pattern.test(e.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === "tel") {
      if (e.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };
  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type={type}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
