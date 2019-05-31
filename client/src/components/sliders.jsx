import React from "react";
//import Slider from "@material-ui/lab/Slider";
import StarRatings from "react-star-ratings";
import "../styles/sliders.css";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

// const styles = {
//   root: {
//     width: 300
//   },
//   slider: {
//     padding: "15px 0px"
//   }
// };

const ModalTitle = props => {
  console.log(props);
  return (
    <div id="modal-title-div">
      <div>
        <h5
          className="modal-title"
          id="modal-title-id"
          style={{
            top: "44px",
            color: "#111",
            fontFamily: "Helvetica Neue, Helvetica,Arial,sans-serif",
            fontSize: "28px",

            textTransform: "uppercase",
            letterSpacing: "0.05rem",
            color: "#111",
            fontWeight: 500,
            display: "inline - block",
            lineHeight: 1,
            margin: " 0 5px"
          }}
        />
      </div>
      <div id="review-length">
        <span id="modal-review-amount">{props.currReviews.length} Reviews</span>
        <div id="modal-stars">
          <StarRatings
            rating={props.starAvg}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="2px"
            starRatedColor="rgb(00, 00,00)"
            isSelectable="false"
            starHoverColor="null"
          />
        </div>
      </div>
      <div id="all-sliders">
        <div id="slider-one">
          <Slider />
        </div>

        <div id="slider-two">
          <Slider />
        </div>
        <div slider="slider-three">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default ModalTitle;
window.ModalTitle = ModalTitle;
