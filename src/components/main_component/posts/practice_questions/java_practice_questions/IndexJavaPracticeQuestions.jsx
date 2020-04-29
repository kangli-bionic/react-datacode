import React, { Component } from "react";
import PostCard from "../../../PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import RightSideSection from "../../../../right_section/RightSideSection";

class IndexJavaPracticeQuestions extends Component {
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
              Java Programming Practice Questions
            </h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="java_practice_questions_beginner.jpeg"
                title="Begineers Java Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_practice_questions_beginner"
              />
              <PostCard
                imgsource="java_practice_questions_intermediate.jpeg"
                title="Intermediate Java Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_practice_questions_intermediate"
              />
              <PostCard
                imgsource="java_practice_questions_advance.jpeg"
                title="Advance Java Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_practice_questions_advance"
              />
            </div>

            <h5 className="text-secondary mt-5 mb-3">
              For More Programming Practice Questions
            </h5>
            <PracticeQuestionCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexJavaPracticeQuestions;
