import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ReviewGenerator from "./components/reviewGen.jsx";
import SignIn from "./components/sign-in.jsx";
// import ModalTitle from "./components/sliders.jsx";
// import StarRatings from "react-star-ratings";
// import FlipArrow from "./components/flipArrow.jsx";
// import { IoIosArrowDown } from "react-icons/io";
// import { IconContext } from "react-icons";

const mousePointer = {
  cursor: "pointer"
};

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: "CJ0066-900",
      currentReviews: [],
      totalStars: 0,
      reviewsToShow: 0,
      expanded1: false,
      expanded2: false,
      modalShow: false
    };
    this.calculateAvgStars = this.calculateAvgStars.bind(this);
    this.flipArrow1 = this.flipArrow1.bind(this);
    this.flipArrow2 = this.flipArrow2.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.findCurrReviews = this.findCurrReviews.bind(this);
  }
  modalClose() {
    this.setState({ modalShow: false });
  }

  modalOpen() {
    this.setState({ modalShow: true });
  }

  flipArrow1() {
    this.setState({
      expanded1: !this.state.expanded1
    });
  }
  flipArrow2() {
    this.setState({
      expanded2: !this.state.expanded2
    });
  }

  findCurrReviews(arr) {
    let currentSku = this.state.sku;
    let activeReview;
    for (let x = 3; x < arr.length; x++) {
      if (arr[x]["sku"] === currentSku) {
        activeReview = arr[x].reviews;
      }
      break;
    }
    return activeReview;
  }

  fetchReviews() {
    Axios.get("http://ec2-3-16-213-178.us-east-2.compute.amazonaws.com/reviews")
      .then(reviewData => {
        let activeReview = this.findCurrReviews(reviewData.data);
        this.setState({
          currentReviews: activeReview,
          totalStars: this.calculateAvgStars(activeReview)
        });
        // Axios.get(
        //   "graph.facebook.com/17873440459141021/top_media? user_id = 17841405309211844& fields=id, media_type, comments_count, like_count"
        // ).then(results => {
        //   console.log(results);
        // });
      })

      .catch(err => console.log(err));
  }

  componentDidMount() {
    //console.log("im mounted");
    window.addEventListener("productClickEvent", event => {
      this.setState({ sku: event.detail.sku });
    });
    this.fetchReviews();
  }

  // writeReview(string){
  //   Axios.post("/reviews",{

  //   })
  // }

  calculateAvgStars(arr) {
    const reviewsArr = arr;
    //console.log("this is review arr", reviewsArr);
    let total = 0;
    for (let i = 0; i < reviewsArr.length; i++) {
      let stars = Number(reviewsArr[i].stars);
      //console.log(typeof stars);
      total = total + stars;
    }
    return total / reviewsArr.length;
  }

  render() {
    const { open } = this.state;
    //console.log("i should be showing a modal", this.state.modalShow);
    return (
      <div className="mainBox">
        <div className="cr-wrCustomerReviewser">
          <div className="cr-header">
            <div className="cr-header-title" />
          </div>

          <ReviewGenerator
            currReviews={this.state.currentReviews}
            expandedState1={this.state.expanded1}
            expandedState2={this.state.expanded2}
            reviewsToShow={this.state.reviewsToShow}
            flipArrow1={this.flipArrow1}
            flipArrow2={this.flipArrow2}
            starAvg={this.state.totalStars}
            modalOpen={this.modalOpen}
          />

          <div className="elfsight-app-2e9e9478-408c-46d2-b95a-fc6eb335785e" />
          <SignIn show={this.state.modalShow} onHide={this.modalClose} />
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
window.CustomerReviews = CustomerReviews;

ReactDOM.render(
  <CustomerReviews />,
  document.getElementById("customer-reviews")
);
// Reviews({ props.currReviews.length })
//   < StarRatings
// rating = { props.starAvg }
// starRatedColor = "blue"
// numberOfStars = { 5}
// name = "rating"
// starDimension = "20px"
// starSpacing = "15px"
// starRatedColor = "rgb(00, 00,00)"
// isSelectable = "false"
// starHoverColor = "null"
//   />
//   <span>
//     <FlipArrow expanded={props.expandedState} />
//   </span>
