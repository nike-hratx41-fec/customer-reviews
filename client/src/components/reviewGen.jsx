import React from "react";
import ReactStars from "react-stars";
import StarRatings from "react-star-ratings";

const underline = {
  textDecoration: "underline"
};

const ReviewGenerator = props => {
  if (props.expandedState === false) {
    return (
      <div>
        {props.currReviews.slice(0, props.reviewsToShow).map(element => (
          <div className="review-item">
            <h3>{element.title}</h3>
            <ReactStars
              count={5}
              value={Number(element.stars)}
              color2={"#000000"}
              edit={false}
            />
            <p>
              {element.user} - {element.date}
            </p>
            {element.description}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <span className="starsAvg">
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
          {props.starAvg} Stars
          <p style={underline}>Write A Review</p>
        </span>

        {props.currReviews.slice(0, props.reviewsToShow).map(element => (
          <div className="review-item">
            <h3>{element.title}</h3>
            <ReactStars
              count={5}
              value={Number(element.stars)}
              color2={"#000000"}
              edit={false}
            />
            <p>
              {element.user} - {element.date}
            </p>
            {element.description}
          </div>
        ))}
        <p style={underline}>More Reviews</p>
      </div>
    );
  }
};

export default ReviewGenerator;

// import React from "react";
// var FontAwesome = require("react-fontawesome");
// import onClickOutside from "react-onclickoutside";

// class ReviewGenerator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       headerTitle: "Reviews",
//       listOpen: false,
//       reviews: this.props.currReviews
//     };
//   }

//   handleClickOutside() {
//     this.setState({
//       listOpen: false
//     });
//   }
//   toggleList() {
//     this.setState(prevState => ({
//       listOpen: !prevState.listOpen
//     }));
//   }
//   render() {
//     const { list } = this.props;
//     const { listOpen, headerTitle } = this.state;
//     return (
//       <div className="cr-wrapper">
//         <div className="cr-header" onClick={() => this.toggleList()}>
//           <div className="cr-header-title">{headerTitle}</div>
//           {listOpen ? (
//             <FontAwesome name="angle-up" size="2x" />
//           ) : (
//             <FontAwesome name="angle-down" size="2x" />
//           )}
//         </div>
//         {listOpen && (
//           <ul className="cr-initial-reviews">
//             {list.map(element => (
//               <li>
//                 <h3>{element.title}</h3>
//                 <p>{`${element.stars} ${element.user} ${element.date}`}</p>
//                 {element.description}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

//  const{list} = this.props
//   const{listOpen, headerTitle} = this.state
//   return(
//     <div className="dd-wrapper">
//     <div className="dd-header" onClick={() => this.toggleList()}>
//         <div className="dd-header-title">{headerTitle}</div>
//         {listOpen
//           ? <FontAwesome name="angle-up" size="2x"/>
//           : <FontAwesome name="angle-down" size="2x"/>
//         }
//     </div>
//      {listOpen && <ul className="dd-list">
//        {list.map((item) => (
//          <li className="dd-list-item" key={item.id} >{item.title}</li>
//         ))}
//       </ul>}
//     </div>
//   )
// }

// export default ReviewGenerator;
