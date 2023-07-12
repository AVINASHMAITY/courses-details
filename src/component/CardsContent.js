import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let cardsData = props.courses;
  let category=props.category;

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
    let cardsArray = [];
    Object.values(cardsData).forEach((course) => {
      course.forEach((element) => {
        cardsArray.push(element);
      });
    });
    return cardsArray;
  }
  else{
    return cardsData[category];
  }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((ele) => {
        return <Card key={ele.id} course={ele} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>;
      })}
    </div>
  );
};

export default Cards;
