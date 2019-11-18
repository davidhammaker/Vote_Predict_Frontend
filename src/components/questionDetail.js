import React, { useState } from 'react';
import Urls from '../urls';
import NavBar from './navbar';
import Message from './message';
import { getCookie, setCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function QuestionDetail() {
  let [question, setQuestion] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [firstLoad, setFirstLoad] = useState(true);
  let [needAnswers, setNeedAnswers] = useState(true);

  if (firstLoad) {
    // Updating state within the axios callback causes an infinite
    // loop. To prevent this, we explicitly call the function only
    // on the when the page is first loaded.
    setFirstLoad(false);
    const id = Utils.getPathParameters(Urls.questions('<id>'))['id'];
    const successCallback = (response) => {
      setQuestion(response.data);
    };
    AxiosUtils.getQuestionDetail(id, successCallback);
  }

  if (needAnswers) {
    setNeedAnswers(false);
    const id = Utils.getPathParameters(Urls.questions('<id>'))['id'];
    const successCallback = (response) => {
      setAnswers(response.data);
    };
    AxiosUtils.getQuestionAnswers(id, successCallback);
  }

  const token = getCookie('token');
  if (!token) {
    setCookie('message', 'You must log in first.');
    setCookie('alertContext', 'alert-info');
    Utils.navigateTo(Urls.login(), {next: Urls.here()});
  }
  
  return (
    <>
      {token && (
        <>
          <NavBar />
          <div className="d-flex align-items-center min-vh-100 centralized">
            <div className="container text-center">
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
