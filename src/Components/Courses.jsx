import React from "react";
import Categories from "./Categories";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const Courses = () => {
  const AllCourses = useLoaderData();
  useTitle('Course')

  return (
    <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 my-8">
      <div className="leftSide cols-span-1">
        <Categories />
      </div>
      <div className="grid grid-cols-2 gap-6  rightSide col-span-3">
        {AllCourses.map((course) => (
          <Card key={course._id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
