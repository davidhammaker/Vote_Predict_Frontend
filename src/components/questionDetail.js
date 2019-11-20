import React, { useState, useEffect } from 'react';
import Urls from '../urls';
import NavBar from './navbar';
import Message from './message';
import { getCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function QuestionDetail(props) {
  let [question, setQuestion] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [error, setError] = useState(false)

  useEffect(
    () => {
      const id = Utils.getPathParameters(Urls.questionDetail('<id>'))['id'];

      const questionSuccess = (response) => {
        setQuestion(response.data);
      };
      const questionFailure = () => {
        setError(true);
      }
      AxiosUtils.getQuestionDetail(id, questionSuccess, questionFailure);

      const answerSuccess = (response) => {
        setAnswers(response.data);
      };
      AxiosUtils.getQuestionAnswers(id, answerSuccess);
    },
    [props.source],
  );

  const token = getCookie('token');
  
  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center min-vh-100 centralized">
        <div className="container text-center">
          {error && (
            <>
              <h3 className="question-style text-secondary">404 - Not Found</h3>
              <p className="text-secondary">The question you are looking for does not exist.</p>
              <h6 className="row">
                <div className="col-sm p-4"><a className="text-decoration-none" href={Urls.home()}>Return Home</a></div>
              </h6>
            </>
          )}
          {!error && (
            <>
            {!token && (
              <div className="alert alert-info text-center">
                <a
                  className="force-anchor-inverse"
                  onClick={
                    () => Utils.navigateTo(Urls.login(), {next: Urls.here()})
                  }
                >
                LOG IN</a> to view this content.
              </div>
            )}
            {token && (
              <>
                  <Message />
                  <h2 className="question-style color-very-light font-weight-bold mb-5">
                    { question['content'] }
                  </h2>
                  {(answers.length !== 0) && (
                    <>
                      <button className="btn answer-button first-button">{answers[0]['content']}</button>
                      <button className="btn answer-button second-button">{answers[1]['content']}</button>
                    </>
                  )}
              </>
            )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
