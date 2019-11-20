import React from 'react';
import Urls from '../urls';
import NavBar from './navbar';


export default function About() {
  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center min-vh-100 centralized">
        <div className="container text-center">
          <h3 className="color-very-light font-weight-bold text-center mb-3">
            What is Vote Predict?
          </h3>
          <div className="row">
            <div className="col-sm p-4 text-left">
              <p className="text-decoration-none text-secondary">
                Here, you will find a set of questions. For each question, you may choose an answer from the options provided. After you cast your vote, you may predict which answer you think the majority of other voters have chosen. New questions will appear regularly, and after each poll closes, its results will be posted. Respond quickly, because the polls are never open for long.
              </p>
            </div>
          </div>
          <h6 className="row">
            <div className="col-sm p-4"><a className="text-decoration-none" href={Urls.home()}>Home</a></div>
          </h6>
        </div>
      </div>
    </>
  );
}
