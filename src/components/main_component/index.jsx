import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  faListAlt,
  faUsers,
  faBookOpen,
  faFileCode,
  faTools,
  faNewspaper,
  faUserClock,
  faLaptopCode,
  faBookReader,
  faBookDead,
  faAddressBook,
  faSwatchbook,
  faBook,
  faPuzzlePiece,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import FooterComponentUpper from "../footer_component/FooterComponentUpper";
import {
  faConnectdevelop,
  faSearchengin,
  faResearchgate,
  faCreativeCommonsSa,
} from "@fortawesome/free-brands-svg-icons";

class MainComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <CarouselComponent />
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <div class="card-deck mt-5 ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                <div class="card border border-white">
                  <Link to="/index_quize_tests">
                    <center>
                      <FontAwesomeIcon
                        icon={faSearchengin}
                        color="blue"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Find</h5>
                    <p class="card-text text-secondary">
                      From building websites to analyzing data, the choice is
                      yours. Find the best of the best courses to learn.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white">
                  <Link to="/index_interview_questioins" activeClass="active">
                    <center>
                      <FontAwesomeIcon icon={faBook} color="blue" size="4x" />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Learn</h5>
                    <p class="card-text text-secondary">
                      Learn How to Code; Coding skills have never been more
                      in-demand. Learn everything you need to take your career
                      to the next level.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-secondary">Read More</h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white">
                  <Link to="/index_mcqs">
                    <center>
                      <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        color="blue"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Practice</h5>
                    <p class="card-text text-secondary">
                      Apply your learning with real-world projects and test your
                      knowledge with tailor-made quizzes & MCQ's.{" "}
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Start */}
        <div className="container-fluid p-0 mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cover3.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-md-6 text-center">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center mt-5">Free Learning Material</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-primary text-left">
                    <h5 className="p-5">
                      Datacode Provides you the Best Learning Content from all
                      over the world to Improve your Skills and Make your
                      Learning Easy and Quick.
                    </h5>
                  </div>

                  <Link to="/home">
                    <button className="btn btn-lg btn-default border border-dark rounded-0 pl-5 pr-5 pt-3 pb-3">
                      <h5>Start Learning</h5>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mt-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center">Learn From the Best Sources</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-left text-secondary">
                    <h5 className="p-5">
                      Datacode Collected the Best Learning Resources. Either one
                      is at Beginners or at Advance level you find your track
                      and learn from it.
                    </h5>
                  </div>
                  <center>
                    <Link to="/home">
                      <button className="btn btn-lg btn-default border border-primary rounded-0 pl-5 pr-5 pt-3 pb-3">
                        <h5 className="text-primary">Getting Started</h5>
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cover4.jpeg")}
                alt="avatar"
              />
            </div>
          </div>
        </div>

        {/* IMages End */}
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <div class="card-deck mt-5">
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      size="4x"
                      color="indigo"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Tutorials & Courses </h5>
                    <p class="card-text text-secondary">
                      Learn your favorite technology from various articles,
                      programming questions and more Collected for you
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_technologies">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="4x"
                      color="indigo"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Communnity Blogs</h5>
                    <p class="card-text text-secondary">
                      Various Blogs on various Technologies
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_articles">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_interview_questioins" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faUsers}
                        color="indigo"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Programming Interview FAQs</h5>
                    <p class="card-text text-secondary">
                      {" "}
                      Read example questions you'll be asked in a technical
                      interview, and read tips on the best ways to answer.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-dark">Read More</h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faFileCode}
                      size="4x"
                      color="indigo"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Programming Practice CODE</h5>
                    <p class="card-text text-secondary">
                      Sharpen your coding skills by finding the best programming
                      questions meant only for you.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_programming_questions">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>First -3  Cards Ending  ...............*/}
        {/* ... starting Lower Cards -5  .........................................*/}
        <div className="container-fluid ">
          <div className="row">
            <div className="col p-0">
              <div class="card-deck mt-5 p-2">
                <div class="card border border-white">
                  <Link to="/index_mcqs">
                    <center>
                      <FontAwesomeIcon
                        icon={faListAlt}
                        color="indigo"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title"> Programming MCQs Practice</h5>
                    <p class="card-text text-secondary">
                      Multiple choice questions of Multiple Technologies are
                      useful for the campus placement & tests
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_quize_tests">
                    <center>
                      <FontAwesomeIcon
                        icon={faUserClock}
                        color="indigo"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Technical MCQs Tests</h5>
                    <p class="card-text text-secondary">
                      Find the best Technical quizzes to test your Technical
                      knowledge
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      size="4x"
                      color="indigo"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Weekly Code Challange</h5>
                    <p class="card-text text-secondary">
                      Challange your coding skills with Weekly Code Challanges
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_code_challange">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faConnectdevelop}
                      size="4x"
                      color="indigo"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Event & Contests</h5>
                    <p class="card-text text-secondary">
                      find the events and Contests hosted by us and be a part of
                      it.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_books">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
