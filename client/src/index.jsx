// import React from "react";
// import ReactDOM from "react-dom";
// import Axios from "axios";
// import ReviewGenerator from "./components/reviewGen.jsx";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentReviews: [],
//       reviews: [],
//       totalStars: 0
//     };
//     this.calculateAvgStars = this.calculateAvgStars.bind(this);
//   }

//   componentDidMount() {
//     Axios.get("/reviews")
//       .then(reviewData => {
//         this.setState({
//           currentReviews: reviewData.data[0].reviews,
//           reviews: reviewData.data
//         });
//         console.log(reviewData.data[0].reviews);
//       })
//       .then(() => {
//         this.setState({
//           totalStars: this.calculateAvgStars()
//         });
//       })

//       .catch(err => console.log(err));
//   }

//   calculateAvgStars() {
//     const reviewsArr = this.state.reviews[0].reviews;
//     console.log("this is review arr", reviewsArr);
//     let total = 0;
//     for (let i = 0; i < reviewsArr.length; i++) {
//       let stars = Number(reviewsArr[i].stars);
//       console.log(typeof stars);
//       total = total + stars;
//     }
//     return total / reviewsArr.length;
//   }

//   render() {
//     return (
//       <div>
//         <div className="cr-wrapper">
//           <div className="cr-header">
//             <div className="cr-header-title">
//               Reviews ({this.state.currentReviews.length}) -
//               {this.state.totalStars}
//             </div>
//           </div>
//           <ReviewGenerator currReviews={this.state.currentReviews} />
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("customer-reviews"));
