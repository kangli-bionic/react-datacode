import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCopyright } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import { faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import MCQTestCardCarousel from "./MCQTestCardCarousel";
import PostCard from "../../../PostCard";
class IndexQuizeTests extends Component {
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
            <h2 className="text-center mb-4">Programming Quiz Test</h2>
            <Link to="/home" className="badge badge-primary mr-1 mb-3">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="c_quize.jpeg"
                title="C Programming Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_quize_tests"
              />
              <PostCard
                imgsource="python_quize.jpeg"
                title="Python Programming Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/python_quize_tests"
              />
              <PostCard
                imgsource="java_quize.jpeg"
                title="Java Programming Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="html_css_quize.jpeg"
                title="HTML & CSS Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/html_quize_tests"
              />
              <PostCard
                imgsource="js_quize.jpeg"
                title="JavaScript Programming Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/js_quize_tests"
              />
              <PostCard
                imgsource="ds_quize.jpeg"
                title="DataStructure Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/ds_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="dbms_quize.jpeg"
                title="DBMS Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/dbms_quize_tests"
              />
              <PostCard
                imgsource="sql_quize.jpeg"
                title="SQL Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/sql_quize_tests"
              />
              <PostCard
                imgsource="oops_quize.jpeg"
                title="OOPs Programming Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/oops_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="angular_quize.jpeg"
                title="Angular Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/angular_quize_tests"
              />
              <PostCard
                imgsource="react_quize.jpeg"
                title="React Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/react_quize_tests"
              />
              <PostCard
                imgsource="android_quize.jpeg"
                title="Android Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/Android_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="django_quize.jpeg"
                title="Django Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/html_quize_tests"
              />
              <PostCard
                imgsource="bootstrap_quize.jpeg"
                title="Bootstrap Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/bootstrap_quize_tests"
              />
              <PostCard
                imgsource="git_quize.jpeg"
                title="Git Quiz Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/git_quize_tests"
              />
            </div>
            <h4 className="text-secondary mt-3">For More Quiz Tests</h4>
            <MCQTestCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexQuizeTests;
