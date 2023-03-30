import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { title, img, description } = courseDetails;
  return (
    <div>
      <div className="mx-auto my-10 w-8/12 p-6 rounded-md shadow-md text-center">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">          
          <h2 className="text-3xl font-semibold tracking-wide oxanium">
            {title}
          </h2>
        </div>
        <p className="roboto-mono">
          {description}
        </p>
        <Link to='/courses'><button className="btn btn-primary oxanium my-5">Return to Course</button></Link>
      </div>
    </div>
  );
};

export default CardDetails;
