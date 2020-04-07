import React, { Component } from "react";
import { Link } from "react-router-dom";
class ArticlePostCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div class="card border border-white">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />

          <div class="card-body">
            <h6 className="text-right text-primary">{this.props.tag}</h6>
            <h6 class="card-title text-secondary">{this.props.title}</h6>
            <p class="card-text">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white">
            <div className="row">
              <div className="col text-right">
                <a href={this.props.link}>
                  <h6 className="btn btn-default border border-secondary text-secondary">
                    Read More
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArticlePostCard;