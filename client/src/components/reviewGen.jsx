import React from "react";

import StarRatings from "react-star-ratings";
import FlipArrow from "./flipArrow.jsx";
import { MdKeyboardArrowDown } from "react-icons/md";

const mousePointer = {
  cursor: "pointer"
};

const underline = {
  textDecoration: "underline"
};

const boxSize = {
  boxSizing: "border-box",
  width: "25%",
  paddingTop: "40px"
};

const ReviewGenerator = props => {
  return (
    <div className="accordion" id="accordionExample" style={boxSize}>
      <div className="card">
        <div
          className="card-header"
          id="headingOne"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
          onClick={props.flipArrow1}
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            height: "80px"
          }}
        >
          <h3
            style={{
              color: "#111",
              fontFamily: "Helvetica Neue, Helvetica,Arial,sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              position: "relative",
              transform: "translateY(-50%)",
              top: "50%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              margin: "auto"
            }}
          >
            Free Shipping & Returns
          </h3>

          <span
            style={{
              position: "absolute",
              top: 27,
              left: 390,
              width: "200px",
              height: "1auto"
            }}
          >
            <FlipArrow expanded={props.expandedState1} />
          </span>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              Free standard shipping and 30-day free returns, only with
              NikePlus.
              <p style={underline}>
                Learn more. Return policy exclusions apply.
              </p>
              <li>Standard / Arrives 2-4 Business Days</li>
              <li>Two-Day / Arrives 2-3 Business Days</li>
              <li>Next-Day / Arrives 1-2 Business Days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header"
          id="headingTwo"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          onClick={props.flipArrow2}
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            height: "80px"
          }}
        >
          <h3
            style={{
              color: "#111",
              fontFamily: "Helvetica Neue, Helvetica,Arial,sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              spacing: "10px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              position: "relative",
              transform: "translateY(-50%)",
              top: "50%"
            }}
          >
            Reviews({props.currReviews.length})
          </h3>
          <div
            style={{
              position: "absolute",
              top: 23,
              left: 275,
              width: "200px",
              height: "1auto"
            }}
          >
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
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                left: 116
              }}
            >
              <FlipArrow expanded={props.expandedState2} />
            </span>
          </div>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div className="starsAvg">
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
              <span
                style={{
                  display: "inline-block",
                  position: "relative",
                  left: 20,
                  top: 5
                }}
              >
                {props.starAvg} Stars
              </span>
              <p>
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  style={{ textDecoration: "underline", color: "black" }}
                >
                  Write a Review
                </button>
              </p>
            </div>

            {props.currReviews.slice(-3).map(element => (
              <div className="review-item">
                <p>{element.title}</p>
                <StarRatings
                  rating={Number(element.stars)}
                  numberOfStars={5}
                  name="rating"
                  starDimension="13px"
                  starSpacing="1.5px"
                  starRatedColor="rgb(00, 00,00)"
                  isSelectable="false"
                  starHoverColor="null"
                />
                <p style={{ display: "inline-block", padding: "5px" }}>
                  {element.user} - {element.date}
                </p>
                <p>{element.description}</p>
              </div>
            ))}
            <button
              className="btn btn-link collapsed"
              type="button"
              style={{ textDecoration: "underline", color: "black" }}
            >
              More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewGenerator;
