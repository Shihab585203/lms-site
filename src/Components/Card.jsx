import React from "react";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
//   console.log(course);
  const { _id, img, title, description } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-end">
          <Link to={`/courses/${_id}`}><button className="btn btn-primary">View in Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
