import React, { useState, useEffect } from 'react';
import Urls from '../urls';
import NavBar from './navbar';
import Message from './message';
import { getCookie } from './utils/cookieFunctions';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function QuestionDetail(props) {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(false)
  const [reply, setReply] = useState({
    question: question['id'],
    vote: null,
    prediction: null
  })
  const [vote, setVote] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [existingReply, setExistingReply] = useState(false);
  const [gotAnswers, setGotAnswers] = useState(false);
  const [gotReply, setGotReply] = useState(false);

  useEffect(
    () => {
      const id = Utils.getPathParameters(Urls.questionDetail('<id>'))['id'];

      if (!gotAnswers) {
        const questionSuccess = (response) => {
          setQuestion(response.data);
        };
        const questionFailure = () => {
          setError(true);
        }
        AxiosUtils.getQuestionDetail(id, questionSuccess, questionFailure);

        const answerSuccess = (response) => {
          setAnswers(response.data);
          setGotAnswers(true);
        };
        AxiosUtils.getQuestionAnswers(id, answerSuccess);
      }

      if (gotAnswers && !gotReply) {
        const getReplySuccess = (response) => {
          setExistingReply(true);
          answers.map((answer) => {
            if (answer['id'] === response.data['vote']) {
              setVote(answer['content']);
            }
            if (answer['id'] === response.data['prediction']) {
              setPrediction(answer['content']);
            }
          });
          setGotReply(true);
        }
        const getReplyFailure = () => setGotReply(true);
        AxiosUtils.getReply(id, getReplySuccess, getReplyFailure);
      }
    },
    [props.source, gotAnswers, gotReply, answers],
  );

  const castVote = (id, content) => {
    setReply({
      question: question['id'],
      vote: id,
      prediction: null
    });
    setVote(content);
  }

  const castPrediction = (id, content) => {
    setReply({
      question: question['id'],
      vote: reply['vote'],
      prediction: id
    });
    setPrediction(content);
  }

  const sendReply = () => {
    const replySuccess = () => {
      Utils.navigateTo(Urls.questions());
    }

    const replyFailure = (error) => {
      console.log(error.response);
    }

    AxiosUtils.postReply(reply, replySuccess, replyFailure);
  }

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
                  {(!existingReply && answers.length !== 0) && (
                    <>
                      {!reply['vote'] && (
                        <>
                          <button
                            className="btn answer-button first-button"
                            onClick={() => {
                              castVote(answers[0]['id'], answers[0]['content'])
                            }}
                          >
                            {answers[0]['content']}
                          </button>
                          <button
                            className="btn answer-button second-button"
                            onClick={() => {
                              castVote(answers[1]['id'], answers[1]['content'])
                            }}
                          >
                            {answers[1]['content']}
                          </button>
                        </>
                      )}
                      {(reply['vote'] && !reply['prediction']) && (
                        <>
                          <h4 className="text-secondary">You voted:</h4>
                          <button
                            className="btn standard-btn"
                            disabled
                          >
                            {vote}
                          </button>
                          <br />
                          <br />
                          <h3 className="text-secondary">Now, which answer will be more popular?</h3>
                          <br />
                          <button
                            className="btn answer-button first-button"
                            onClick={() => {
                              castPrediction(answers[0]['id'], answers[0]['content'])
                            }}
                          >
                            {answers[0]['content']}
                          </button>
                          <button
                            className="btn answer-button second-button"
                            onClick={() => {
                              castPrediction(answers[1]['id'], answers[1]['content'])
                            }}
                          >
                            {answers[1]['content']}
                          </button>
                        </>
                      )}
                      {(reply['vote'] && reply['prediction']) && (
                        <>
                          <div className="row">
                            <div className="col-sm p-4">
                              <h4 className="text-secondary">You&nbsp;voted:</h4>
                              <button
                                className="btn standard-btn"
                                disabled
                              >
                              {vote}
                              </button>
                            </div>
                            <div className="col-sm p-4">
                              <h4 className="text-secondary">You&nbsp;predicted:</h4>
                              <button
                                className="btn standard-btn"
                                disabled
                              >
                              {prediction}
                              </button>
                            </div>
                          </div>
                          <button
                            className="btn standard-btn"
                            onClick={() => {
                              sendReply()
                            }}
                          >
                            Send your response
                          </button>
                        </>
                      )}
                    </>
                  )}
                  {existingReply && (
                    <>
                      <div className="row">
                        <div className="col-sm p-4">
                          <h4 className="text-secondary">You&nbsp;voted:</h4>
                          <button
                            className="btn standard-btn"
                            disabled
                          >
                          {vote}
                          </button>
                        </div>
                        <div className="col-sm p-4">
                          <h4 className="text-secondary">You&nbsp;predicted:</h4>
                          <button
                            className="btn standard-btn"
                            disabled
                          >
                          {prediction}
                          </button>
                        </div>
                      </div>
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
