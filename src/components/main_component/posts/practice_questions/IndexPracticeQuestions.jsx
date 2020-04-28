import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "./PracticeQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../../PostCard";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
class IndexPracticeQuestions extends Component {
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
            <h2 className="text-center mb-4">Programming Practice Questions</h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="c_practice_questions_beginner.jpeg"
                title="C Programming Practice Questions"
                paragraph="We Love to Code and this is the best"
                link="/index_c_practice_questions"
              />
              <PostCard
                imgsource="python_programming_question.jpeg"
                title="Python Programming Practice Questions"
                paragraph="We Love to Code and this is the best "
                link="/index_python_practice_questions"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="java_programming_question.jpeg"
                title="Java Programming Practice Questions"
                paragraph="We Love to Code and this is the best "
                link="/index_java_practice_questions"
              />
              <PostCard
                imgsource="ds_practice_questions_beginner.jpeg"
                title="Datastructre Programming Practice Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_ds_practice_questions"
              />
            </div>

            <h5 className="text-secondary mt-2 mb-3">
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

export default IndexPracticeQuestions;
