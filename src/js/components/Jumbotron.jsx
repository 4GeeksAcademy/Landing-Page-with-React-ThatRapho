import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-body-secondary rounded-3 w-75 m-auto mt-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-semibold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap.
        </p>{" "}
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;