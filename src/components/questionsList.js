import React, { useState } from 'react';
import { getCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';


export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  // May need `useEffect` here to render questions after component mounts.

  const token = getCookie('token');
  
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <h2 className="color-very-light font-weight-bold mb-5">
          <span className="title-style">Question</span>s
        </h2>
        {/* Questions will go here in a list. */}
        <button onClick={() => {
          const successCallback = (response) => console.log(response.data);
          AxiosUtils.getQuestions(successCallback);
        }}>
          Click me
        </button>
      </div>
    </div>
  );
}
