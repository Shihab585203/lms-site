import React from "react";
import { Link } from "react-router-dom";
import MyLocation from "./MyLocation";

const Contact = () => {
  return (
    <div>
      <MyLocation />
      <Link to="/direction">
        <button className="btn btn-primary m-10">Direction</button>
      </Link>
    </div>
  );
};

export default Contact;
