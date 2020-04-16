import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";

class OSInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-dark">
                <div className="card-body">
                  <h1 className="card-title text-light display-5 ">
                    OS Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-7 ">
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link
                to="/index_interview_questioins"
                className="badge badge-warning mr-1"
              >
                Interview Questions >
              </Link>
              <QuestionCard
                question={`1) What is an operating system?
`}
                answer={`The operating system is a software program that facilitates computer hardware to communicate and operate with the computer software. It is the most important part of a computer system without it computer is just like a box.

`}
              />
              <QuestionCard
                question={`2) What is the main purpose of an operating system?
`}
                answer={`There are two main purposes of an operating system:

It is designed to make sure that a computer system performs well by managing its computational activities.
It provides an environment for the development and execution of programs.`}
              />
              <QuestionCard
                question={`3) What are the different operating systems?
`}
                answer={`
Batched operating systems
Distributed operating systems
Timesharing operating systems
Multi-programmed operating systems
Real-time operating systems`}
              />
              <QuestionCard
                question={`4) What is a socket?
`}
                answer={`A socket is used to make connection between two applications. Endpoints of the connection are called socket.

`}
              />
              <QuestionCard
                question={`5) What is a real-time system?
`}
                answer={`Real-time system is used in the case when rigid-time requirements have been placed on the operation of a processor. It contains a well defined and fixed time constraints.

`}
              />
              <QuestionCard
                question={`6) What is kernel?
`}
                answer={`Kernel is the core and most important part of a computer operating system which provides basic services for all parts of the OS.

`}
              />
              <QuestionCard
                question={`7) What is monolithic kernel?
`}
                answer={`A monolithic kernel is a kernel which includes all operating system code is in single executable image.

`}
              />
              <QuestionCard
                question={`8) What do you mean by a process?
`}
                answer={`An executing program is known as process. There are two types of processes:

Operating System Processes
User Processes`}
              />
              <QuestionCard
                question={`9) What are the different states of a process?
`}
                answer={`A list of different states of process:

New Process
Running Process
Waiting Process
Ready Process
Terminated Process`}
              />
              <QuestionCard
                question={`10) What is the difference between micro kernel and macro kernel?
`}
                answer={`Micro kernel: micro kernel is the kernel which runs minimal performance affecting services for operating system. In micro kernel operating system all other operations are performed by processor.

Macro Kernel: Macro Kernel is a combination of micro and monolithic kernel.

`}
              />
            </div>
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />

              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OSInterviewQuestions;