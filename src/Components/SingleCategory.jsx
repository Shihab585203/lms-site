import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import SingleCategoryDetails from "./SingleCategoryDetails";

const SingleCategory = () => {
  const categories = useLoaderData();
  return (
    <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 my-8">
      <div className="leftSide cols-span-1">
        <Categories />
      </div>
      <div className="grid grid-cols-2 gap-6  rightSide col-span-3">
        {categories.map((category) => (
          <SingleCategoryDetails key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
