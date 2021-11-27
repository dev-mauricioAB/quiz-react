import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`;

export const Content = styled.div`
  width: 29rem;
  min-height: 13rem;

  background-color: #252d4a;
  height: min-content;
  border-radius: 0.6rem;
  padding: 1.25rem;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FormContent = styled.form`
	display: flex;
	flex-direction: column;
	color: white;
	gap: 1rem;
	justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.25rem;
	}
`;

export const Input = styled.input`
	border: 1px solid rgba(255, 255, 255, 0.2);
	background-color: transparent;
	padding: 0.55rem;
	color: white;
	border-radius: 4px;
	outline: none;
	font-size: 0.85rem;

	:focus {
		background-color: rgba(255, 255, 255, 0.125);
	}
`;

export const Button = styled.button`
	outline: none;
	border: none;
	color: black;
	border-radius: 4px;
	text-align: center;
	padding: 0.45rem 1rem;
	font-size: 1rem;
	background: #d5f4e6;
	width: 100%;
	align-self: center;
	cursor: pointer;
  transition: 0.3s;
  margin-bottom: 0.8rem;

  :hover {
    filter: opacity(70%);
  }

  &.start-button {
    font-size: 1.6rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Select = styled.select`
  outline: none;
	border: none;
	color: black;
	border-radius: 4px;
	text-align: center;
	padding: 0.45rem 1rem;
	font-size: 1rem;
	width: 100%;
	align-self: center;
  background-color: none !important;
`;

export const Score = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  margin-bottom: 1rem;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  position: relative;

  .question-count {
    margin-bottom: 1rem;

    span {
      font-size: 1rem;
    }
  }

  .question-text{
    margin-bottom: 0.8rem;
    font-size: 1.25rem;
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Answers = styled.div`
  margin-bottom: 1rem;

  div{
    display: flex;
  }
`;

export const Answer = styled.h4`
  font-weight: 400;

  :first-child {
    margin-top: 0.5rem;
  }  

  &.red {
    color: var(--red);
  }
  &.green {
    color: var(--green);
  }
`;