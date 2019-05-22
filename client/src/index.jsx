import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ReviewGenerator from "./components/reviewGen.jsx";
import StarRatings from "react-star-ratings";
import FlipArrow from "./components/flipArrow.jsx";
// import { IoIosArrowDown } from "react-icons/io";
// import { IconContext } from "react-icons";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentReviews: [],
      reviews: [],
      totalStars: 0,
      reviewsToShow: 0,
      expanded: false
    };
    this.calculateAvgStars = this.calculateAvgStars.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.reviewsToShow === 0
      ? this.setState({
          reviewsToShow: 3,
          expanded: true
        })
      : this.setState({ reviewsToShow: 0, expanded: false });
  }

  componentDidMount() {
    Axios.get("/reviews")
      .then(reviewData => {
        this.setState({
          currentReviews: reviewData.data[0].reviews,
          reviews: reviewData.data
        });
        console.log(reviewData.data[0].reviews);
      })
      .then(() => {
        this.setState({
          totalStars: this.calculateAvgStars(this.state.reviews[0].reviews)
        });
      })

      .catch(err => console.log(err));
  }

  calculateAvgStars(arr) {
    const reviewsArr = arr;
    console.log("this is review arr", reviewsArr);
    let total = 0;
    for (let i = 0; i < reviewsArr.length; i++) {
      let stars = Number(reviewsArr[i].stars);
      console.log(typeof stars);
      total = total + stars;
    }
    return total / reviewsArr.length;
  }

  render() {
    const { open } = this.state;

    return (
      <div className="mainBox">
        <div className="cr-wrapper">
          <div className="cr-header">
            <div className="cr-header-title">
              <h3 onClick={this.showMore}>
                Reviews ({this.state.currentReviews.length})
                <StarRatings
                  rating={this.state.totalStars}
                  starRatedColor="blue"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="15px"
                  starRatedColor="rgb(00, 00,00)"
                  isSelectable="false"
                  starHoverColor="null"
                />
                <FlipArrow expanded={this.state.expanded} />
              </h3>
            </div>
          </div>

          <ReviewGenerator
            currReviews={this.state.currentReviews}
            expandedState={this.state.expanded}
            reviewsToShow={this.state.reviewsToShow}
            showMore={this.showMore}
            starAvg={this.state.totalStars}
          />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("customer-reviews"));
