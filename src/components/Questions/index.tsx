import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { AxiosRequestConfig } from "axios";

import api from "../../services/api";
import { initialInfosSchema } from "../../validations/initalInfosValidation";
import { Question } from "../../models/question";
import { environments } from "../../environments/environments";

import {
  Container,
  Content,
  Score,
  QuestionContainer,
  AnswerContainer,
  Answers,
  Answer,
  Button,
  FormContent,
  Input,
  Select,
} from "./styles";

export const Questions: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const [showScore, setShowScore] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [name, setName] = useState("");

  const handleStartQuiz = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      difficulty: { value: string };
    };

    const name = target.name.value;
    const difficulty = target.difficulty.value;

    const isValid = await initialInfosSchema.isValid({ name, difficulty });

    if (!isValid)
      window.alert("Preencha todas informações antes de prosseguir.");
    else {
      setName(name);
      setLoadingQuestions(true);

      const requestParams: AxiosRequestConfig = {
        params: {
          apiKey: environments.apiKey,
          limit: 10,
          difficulty,
        },
      };

      api
        .get("", requestParams)
        .then(({ data }) => {
          if (questions.length === 0) {
            setLoadingQuestions(false);
            setQuestions(data);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleAnswerOptionClick = (
    question: Question,
    userAnswer: number,
    answers: { [key: string]: string }
  ) => {
    if (Object.values(answers)[userAnswer] === "true") setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      Object.values(question.answers)[userAnswer],
    ]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetQuiz = () => {
    setQuestions([]);
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <Container>
      <Content>
        {questions.length === 0 ? (
          <FormContent onSubmit={handleStartQuiz}>
            <label>
              What is your name?
              <Input type="text" name="name" defaultValue={name ? name : ""} />
            </label>

            <label>
              <span>Choice one difficulty: </span>
              <Select name="difficulty">
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </Select>
            </label>

            <Button type="submit" className="start-button">
              {loadingQuestions ? (
                <Loader type="Puff" color="#00BFFF" height={35} width={35} />
              ) : (
                "Start!"
              )}
            </Button>
          </FormContent>
        ) : (
          <h1>{showScore ? "Congratulatons " + name : "Good luck " + name}</h1>
        )}
        {showScore ? (
          <>
            <Score>
              You scored {score} out of {questions.length}
            </Score>
            {Object.values(questions).map((question, index) => (
              <div key={question.id}>
                <h3>{index + 1 + ". " + question.question}</h3>
                <Answers>
                  {Object.values(question.answers).map((answer, index) =>
                    Object.values(question.correct_answers)[index] ===
                    "true" ? (
                      <Answer className="green" key={index}>
                        {answer !== null && "-> " + answer}
                      </Answer>
                    ) : (
                      <Answer className="red" key={index}>
                        {answer !== null && "-> " + answer}
                      </Answer>
                    )
                  )}
                  <div>
                    Your answer:&nbsp;
                    {<h4>{userAnswers[index]}</h4>}
                  </div>
                </Answers>
              </div>
            ))}

            <Button type="reset" onClick={handleResetQuiz}>
              Start Again
            </Button>
          </>
        ) : questions.length > 0 ? (
          <>
            <QuestionContainer>
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {Object.values(questions)[currentQuestion].question}
              </div>
            </QuestionContainer>
            <AnswerContainer>
              {Object.values(questions[currentQuestion].answers).map(
                (answerOption, index) =>
                  answerOption !== null && (
                    <Button
                      key={index}
                      onClick={() =>
                        handleAnswerOptionClick(
                          Object.values(questions)[currentQuestion],
                          index,
                          questions[currentQuestion].correct_answers
                        )
                      }
                    >
                      {answerOption}
                    </Button>
                  )
              )}
            </AnswerContainer>
          </>
        ) : (
          <h4>
            <i>Persistence is the path to success...</i>
          </h4>
        )}
      </Content>
    </Container>
  );
};
