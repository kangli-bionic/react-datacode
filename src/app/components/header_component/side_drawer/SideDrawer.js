import React, { useState } from "react";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faQuestion,
  faCheckSquare,
  faUsers,
  faMap,
  faComments,
  faAddressCard,
  faClipboardCheck,
  faDoorOpen,
  faInfoCircle,
  faSplotch,
  faBookOpen,
  faChalkboardTeacher,
  faTasks,
  faLaptopCode,
  faUserTie,
  faCode,
  faFlask,
  faFileCode,
  faNewspaper,
  faClipboardList,
  faSignInAlt,
  faCalendar,
  faAward,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loader-spinner";

const SideDrawer = ({
  backDropClickHandler,
  show,
  currentUser,
  logoutUser,
  userProfile,
  userProfileLoading,
}) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "row m-0 side-drawer open";
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={drawerClasses}>
        <div className="col-12 p-0">
          <div className="row d-none d-sm-block">
            <div className="col-12 text-right">
              <i
                className="nav-cross fal fa-times mx-md-3"
                onClick={() => backDropClickHandler()}
              />
            </div>
          </div>
          <div className="row m-0 mt-md-0 mt-4 px-3 side-header">
            {currentUser && currentUser.userName ? (
              <>
                <div className="header-profile">
                  <Link
                    onClick={() => backDropClickHandler()}
                    to={`/my_profile/${currentUser.email}`}
                  >
                    {userProfileLoading ? (
                      <div className="rounded-circle header-profile-img">
                        <Loader
                          type="Audio"
                          color="#30006d"
                          height={40}
                          width={40}
                          timeout={8000} //3 secs
                        />
                      </div>
                    ) : (
                      <img
                        className="rounded-circle header-profile-img"
                        height="40"
                        width="40"
                        src={
                          userProfile && userProfile.imgUrl !== ""
                            ? userProfile.imgUrl
                            : require(`../../../../assets/images/svg/profile.jpg`)
                        }
                        alt="avatar"
                      />
                    )}
                  </Link>
                  <div className="d-flex align-items-center mt-2">
                    <h2>
                      {`Hello! ${
                        userProfile ? userProfile.firstName : "Learner"
                      }`}
                    </h2>
                    <i
                      onClick={() => toggle()}
                      className={`far ${
                        isOpen ? "fa-angle-up" : "fa-angle-down"
                      } ml-2`}
                      id="toggler"
                    />
                  </div>
                  <UncontrolledCollapse toggler="#toggler">
                    <div className="row m-0 mt-2">
                      <div className="col-4 text-center">
                        <Link
                          onClick={() => backDropClickHandler()}
                          to={`/my_profile/${currentUser.email}`}
                        >
                          <i className="fas fa-user" />
                          <p>My Profile</p>
                        </Link>
                      </div>
                      <div className="col-4 text-center">
                        <Link
                          onClick={() => backDropClickHandler()}
                          to={`/my_library`}
                        >
                          <i className="fas fa-window-restore" />
                          <p>My Library</p>
                        </Link>
                      </div>
                      <div className="col-4 text-center">
                        <Link
                          to="/edit_profile"
                          onClick={() => backDropClickHandler()}
                        >
                          <i className="far fa-user-edit" />
                          <p>Edit Profile</p>
                        </Link>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="mt-2">Hello! Learner</h2>
                  <p>Start your learning with Community</p>

                  <Link to="/signup" onClick={() => backDropClickHandler()}>
                    <div className="btn join-us mb-3">Join Us</div>
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="row m-0 ul-list mt-4">
            <ul className="m-0 p-0">
              <Link to="/home" onClick={() => backDropClickHandler()}>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                  </span>
                </li>
              </Link>

              <Link
                to="/index_technologies"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="mr-2"
                    />{" "}
                    Tutorials/Courses
                  </span>
                </li>
              </Link>

              <Link
                to="/index_training_certification"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faAward} className="mr-2" />{" "}
                    Training/Certification
                  </span>
                </li>
              </Link>
              <Link
                to="/index_interview_questioins"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faUserTie} className="mr-2" />{" "}
                    Interview Preparation
                  </span>
                </li>
              </Link>
              <Link
                to="/index_quize_tests"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFlask} className="mr-2" /> Quiz
                    Tests
                  </span>
                </li>
              </Link>
              <Link to="/index_mcqs" onClick={() => backDropClickHandler()}>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckSquare} className="mr-2" />{" "}
                    Programming MCQs
                  </span>
                </li>
              </Link>
              <Link
                to="/index_programming_questions"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCode} className="mr-2" /> Practice
                    Code Problem
                  </span>
                </li>
              </Link>
              {currentUser && (
                <Link to="/" onClick={() => logoutUser()}>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
                      Log out
                    </span>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        {/* <ul>
          <li>
            <a
              href="/react-datacode/#/home"
              onClick={() => backDropClickHandler()}
            >
              {" "}
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_technologies">
              {" "}
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
              Tutorials/Courses
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_training_certification">
              {" "}
              <FontAwesomeIcon icon={faAward} className="mr-2" />
              Training/Certification
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_code_challange">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              Code Challange
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_interview_questioins">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Interview Preparation
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_mcqs">
              <FontAwesomeIcon icon={faTasks} className="mr-2" />
              Programming MCQs
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_practice_questions">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Practice Questions
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_quize_tests">
              <FontAwesomeIcon icon={faFlask} className="mr-2" />
              Quiz Tests
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_programming_questions">
              <FontAwesomeIcon icon={faFileCode} className="mr-2" />
              Example Questions
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_articles">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Blogs
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_events">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Events
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_events">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login/Signup
            </a>
          </li>
          <li>
            <a href="#footer">Log Out</a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

SideDrawer.defaultProps = {
  email: "",
  userProfile: {},
};

SideDrawer.propTypes = {
  email: PropTypes.string,
  userProfile: PropTypes.object,
};

export default SideDrawer;