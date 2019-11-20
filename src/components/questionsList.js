import React, { useState, useEffect } from 'react';
import Urls from '../urls';
import NavBar from './navbar';
import Message from './message';
import { getCookie, setCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function QuestionsList(props) {
  let [questions, setQuestions] = useState([]);

  useEffect(
    () => {
      const successCallback = (response) => {
        setQuestions(response.data);
      };
      AxiosUtils.getQuestions(successCallback);
    },
    [props.source],
  );

  const token = getCookie('token');
  if (!token) {
    setCookie('message', 'You must log in first.');
    setCookie('alertContext', 'alert-info');
    Utils.navigateTo(Urls.login(), {next: Urls.questions()});
  }
  
  return (
    <>
      {token && (
        <>
          <NavBar />
          <div className="d-flex align-items-center min-vh-100 centralized">
            <div className="container text-center">
              <Message />
              <h2 className="color-very-light font-weight-bold mb-5">
                <span className="title-style">Question</span>s
              </h2>
              {questions && (
                questions.map((question) => {
                  if (
                    (new Date(question.date_concluded)) >= (new Date())
                    && (new Date(question.date_published)) <= (new Date())
                    ) {
                    return (
                      <div key={question.id}>
                        <h3><a href={ Urls.questionDetail(question.id) } className="text-decoration-none">
                          { question.content }
                        </a></h3>
                        <br />
                      </div>
                    );
                  }
                  return null;
                })
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
