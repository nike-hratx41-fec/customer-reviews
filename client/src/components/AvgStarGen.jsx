import React from "react";
import ReactStars from "react-stars";
import StarRatings from "react-star-ratings";

const AvgStarGen = props => {
  return (
    <div>
      <StarRatings
        rating={props.starAvg}
        starRatedColor="blue"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="15px"
        starRatedColor="rgb(00, 00,00)"
        isSelectable="false"
        starHoverColor="null"
      />
    </div>
  );
};
