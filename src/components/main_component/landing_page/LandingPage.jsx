import React, { Component } from "react";
import CarouselComponent from "../CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactComponent as Question } from '../../../assets/images/svg/question.svg'
import { ReactComponent as Aboutus } from '../../../assets/images/svg/aboutus.svg'
import CategoryCard from './CategoryCard'
import { data, techData } from './helper'
import {
  faFileCode,
  faTools,
  faNewspaper,
  faUserClock,
  faLaptopCode,
  faBookDead,
  faAddressBook,
  faSwatchbook,
  faBook,
  faPuzzlePiece,
  faChalkboardTeacher,
  faTerminal,
  faSearchMinus,
  faPlus,
  faCartPlus,
  faSlash,
  faArrowRight,
  faUserTie,
  faTasks,
  faCodeBranch,
  faCode,
  faSearch,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import FooterComponentUpper from "../../footer_component/FooterComponentUpper";
import {
  faConnectdevelop,
  faSearchengin,
  faResearchgate,
  faCreativeCommonsSa,
  faDAndD,
  faDAndDBeyond,
} from "@fortawesome/free-brands-svg-icons";
import TechnologyCard from "./TechnologyCard";

class LandingPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | Computer Science Learning Community</title>
        </Helmet>
        <CarouselComponent />
        <div className="row m-0 community-section">
          <div className="col-12 col-md-6 text-center">
            <Question width="500px" height="500px" />
          </div>
          <div className="col-12 col-md-6 pt-5 pr-4">
            <h3>Are you a Computer Science Beginner?</h3>
            <h5 className="mt-1 text-left"><b>And not sure where to start from?</b></h5>
            <p className="mt-3 pr-4 text-left">
              We at Datacode.in aims in creating a platform for beginners' communities where they will get the best online technical content like the latest technical blogs, tutorials and courses, practice questions, quizzes, training and certification, and lot more on a single platform.
              Learning has never been this easy, then what are you waiting for? Join Datacode.in and Learn with Community
            </p>
            <button className="btn join-us-button shadow-lg text-center">
              Join Us
            </button>
          </div>
        </div>
        <div className="row m-0 aboutus-section">
          <div className="col-12 col-md-6 pt-5 pl-5">
            <h3>What we do!</h3>
            <div className="tag-lines">
              <span>Find</span><span>Learn</span><span>Connect</span><span>Grow</span>
            </div>
            <p className="mt-3 pr-4 text-left">
              Datacode Provides you the Best free Learning Content from all over the world to Improve your Skills and Make your Learning Easy and Quick.
              Either one is at Beginners or at the Advance level you find your track and learn from it.
            </p>
            <div className="find-out-more shadow-lg p-3">
              <p>We aim at creating a better learning experience by dividing Datacode.in in  the various categories to make it easier for you</p>
              <span className="find-out-more">Find out more <i className="fal fa-long-arrow-right" /></span>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <Aboutus width="500px" height="500px" />
          </div>
        </div>
        <div className="row m-0 category-section text-center px-5">
          <div className="col-12 text-center">
            <h2 className="text-center">What you will find here?</h2>
          </div>
          <div className="row mt-3 text-center d-flex justify-content-center">
            {data.map((item) => (
              <CategoryCard
                categoryName={item.categoryName}
                svgSource={item.svgSource}
                categoryDiscription={item.categoryDiscription}
                link={item.link}
              />
            ))}
          </div>
        </div>

        <div className="row m-0 category-section text-center px-5">
          <div className="col-12 text-center">
            <h2 className="text-center">What technology do you want to learn today?</h2>
          </div>
          <div className="row mt-5 text-left d-flex justify-content-center">
            {techData.map((item) => (
              <TechnologyCard
                technologyName={item.technologyName}
                svgSource={item.svgSource}
                technologyDiscription={item.technologyDiscription}
                link={item.link}
              />
            ))}
          </div>
          <span className="text-right">Find out more <i className="fal fa-long-arrow-right" /></span>
        </div>
      </>
    );
  }
}

export default LandingPage;