import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      totalStars: 0
    };
  }

  render() {
    return (
      <div>
        <div className="cr-wrapper">
          <div className="cr-header">
            <div className="cr-header-title">
              Reviews ({this.state.reviews.length})
            </div>
          </div>
          <ul className="cr-initial-reviews">
            <li> I need to render reviews dynamically</li>
            <li> I need to render reviews dynamically</li>
            <li> I need to render reviews dynamically</li>
            <li> I need to render reviews dynamically</li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("customer-reviews"));
