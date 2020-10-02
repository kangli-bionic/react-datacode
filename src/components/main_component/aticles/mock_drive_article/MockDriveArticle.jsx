import React, { Component } from 'react';
import HeaderBannerSectionBlack from '../../HeaderBannerSectionBlack';

class MockDriveArticle extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="row" style={{ backgroundColor: "#191919" }}>
          <div className="col-md-2">
          </div>
          <div className="col-md-8 mb-5" style={{ backgroundColor: "#191919" }}>
            <a href="http://bit.ly/datacodemockdrive"><HeaderBannerSectionBlack imgsource="mocktestdrive.png" /></a>
            <h1 className="mt-3" style={{ color: "yellow", fontSize: 40 }}>“ If a window of opportunity appears, don't pull down the shade ”</h1>
            <p style={{ color: "white" }}>Hey there!
            As the placement time is arising and you aspirants may be worried about the preparation that is needed for the placement in this pandemic.
            </p>
            <p style={{ color: "yellow" }}>We know you must be having lots of query and doubts in your mind.</p>
            <ul style={{ color: "white" }}>
              <li><b>How ?</b></li>
              <li><b>What ?</b></li>
              <li><b>When ?</b></li>
            </ul>
            <h2 style={{ color: "#37c9ef", textAlign: "center" }}><b>BUT DON'T WORRY!</b></h2>
            <p style={{ color: "white" }}>"The Best way to prepare for an interview is to actually face a mock test drive and interview. Datacode brings to you a great opportunity to put your step forward through an online mock placement drive for beginners who are willing to prepare for the placements."</p>
            <hr style={{ backgroundColor: "#37c9ef", width: 120 }} />
            <h5 className="border-warning border-left pl-4" style={{ color: "yellow" }}>
              Our aim behind this mock test drive is to prepare and to make our learners ready to face the placements processes and to make them aware about the steps and  the abilities that most MNCs expect in the candidates.
              The drive is designed to fully equip students with academic and strategic needs for all placement processes. It has incorporated essential elements required to clear the placement exams of various MNCs.
            </h5>
            <p style={{ color: "white", marginTop: 35 }}>So why to wait? Get up and Grab the chance to take self analysis of your knowledge, skills and abilities.</p>
            <p style={{ color: "white", marginTop: -16 }}>All you have to do is to visit the link below and register. Hurry up! Grab the chance! Register now!</p>
            <center><a href="http://bit.ly/datacodemockdrive"><div className="btn btn-outline-warning mt-3 mb-3">Register Now</div></a></center>

            <p style={{ color: "white", marginTop: 35 }}>After registering on the link, you will be notified by mail and given an online technical test. We will provide you a detailed analysis report after which, you'll be moving forward to give a coding test (You can choose any programming language).</p>
            <p style={{ color: "white", marginTop: 35 }}>You will be provided with the analysis of the coding round and moving forward, an interview round will be scheduled for you where you will be directly interviewed by MNC developers.</p>
            <p style={{ color: "#37c9ef", marginTop: 35 }}>The drive includes the 3 phases that we are going to conduct.</p>

            <h6 style={{ color: "#37c9ef" }}>1. Technical Test :-</h6>
            <p style={{ color: "white" }}>This round will include the questions about quantitative aptitude, logical reasoning and verbal ability. Logical reasoning aptitude tests are designed to measure the candidate’s ability to draw logical conclusions based on statements or arguments, and to identify the strengths and weaknesses of those arguments.</p>
            <p style={{ color: "white", marginTop: -16 }}>Use your knowledge and skill and solve some of the best interview and placement test questions asked by companies to see where your aptitude preparation stands.</p>
            <h6 style={{ color: "#37c9ef" }}>2. Coding Round :-</h6>
            <p style={{ color: "white" }}> The most crucial step for the placement process is to analyse your ability of solving the competitive coding problems. This coding round will contain 2 coding problems that you need to solve. You are free to choose any programming language of your choice and interest.</p>
            <h6 style={{ color: "#37c9ef" }}>3. Interview Round :-</h6>
            <p style={{ color: "white" }}>Our interview round consists of a panel of expert software developers from well-known MNCs. There will be a virtual mock interview by our experts in which you will be asked some sort of technical concepts and on that basis you will be scored.</p>
            <p style={{ color: "white", marginTop: -16 }}>You will get the reviews about your performance and the suggestions you should follow for self improvement. This will be proved highly beneficial for you to learn from your mistakes and to be ready for future opportunities.</p>
            <HeaderBannerSectionBlack className="mt-5 mb-5" imgsource="mock_drive_flow.png" />
          </div>
          <div className="col-md-2">

          </div>

        </div>
      </>
    );
  }
}

export default MockDriveArticle;