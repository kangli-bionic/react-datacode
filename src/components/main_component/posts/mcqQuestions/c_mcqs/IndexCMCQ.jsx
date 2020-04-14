import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../../../right_section/RightSideSection";
import McqsShowCard from "../McqsShowCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";

class IndexCMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">
              C Programming MCQs Practice Question
            </h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_mcqs" className="badge badge-warning mr-1 mb-4">
              <FontAwesomeIcon icon={faListAlt} size="2x" />
              MCQs
            </Link>

            <div className="card-deck m-2">
              <McqsShowCard
                link="c_mcq_1"
                title="C Programming MCQs Questions Set 1"
              />
              <McqsShowCard
                link="c_mcq_2"
                title="C Programming MCQs Questions Set 2"
              />
            </div>
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexCMCQ;
