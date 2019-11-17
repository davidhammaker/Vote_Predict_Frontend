import React, { useState } from 'react';
import Urls from '../urls';
import NavBar from './navbar';
import { getCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function QuestionsList() {
  let [questions, setQuestions] = useState([]);
  let [firstLoad, setFirstLoad] = useState(true);

  if (firstLoad) {
    // Updating state within the axios callback causes an infinite
    // loop. To prevent this, we explicitly call the function only
    // on the when the page is first loaded.
    setFirstLoad(false);
    const successCallback = (response) => {
      setQuestions(response.data);
    };
    AxiosUtils.getQuestions(successCallback);
  }

  const token = getCookie('token');
  if (!token) {
    Utils.navigateTo(Urls.login());
  }
  
  return (
    <>
      {token && (
        <>
          <NavBar />
          <div className="d-flex align-items-center min-vh-100 centralized">
            <div className="container text-center">
              <h2 className="color-very-light font-weight-bold mb-5">
                <span className="title-style">Question</span>s
              </h2>
              {questions && (
                questions.map((question) => {
                  return (
                    <div key={question.id}>
                      <h3><a href="#" className="text-decoration-none">
                        { question.content }
                      </a></h3>
                      <br />
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
