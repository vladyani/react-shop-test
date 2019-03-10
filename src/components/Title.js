import React from "react";

const Title = ({ name, title }) => (
  <div className="row">
    <div className="mx-auto my-2 text-center text-title">
      <h1 className="text-capitalize font-weight-bold">
        {name} <strong className="text-blue">{title}</strong>
      </h1>
    </div>
  </div>
);

export default Title;
