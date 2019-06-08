import React from "react";

const Wave = ({ className }) => {
  return (
    <svg
      x="0px"
      y="0px"
      width="300px"
      height="500px"
      viewBox="0 5 130 220"
      preserveAspectRatio="none"
      fill="#fff"
      className={className}
    >
      <path d="M144.61,227.27V0.5H99.89c0,0-57.79,36.01-44.2,119.49S2.88,227.27,2.88,227.27H144.61z" />
    </svg>
  );
};

export default Wave;
