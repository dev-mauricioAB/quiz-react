export interface Question {
  id: number,
  question: string,
  description: string,
  answers: {
    answer_a: string,
    answer_b: string,
    answer_c: string,
    answer_d: string,
    answer_e: string,
    answer_f: string
  },
  multiple_correct_answers: boolean,
  correct_answer: string,
  correct_answers: {
    answer_a_correct: "true" | "false",
    answer_b_correct: "true" | "false",
    answer_c_correct: "true" | "false",
    answer_d_correct: "true" | "false",
    answer_e_correct: "true" | "false",
    answer_f_correct: "true" | "false"
  },
  explanation: string,
  tip: null,
  tags: [],
  category: string,
  difficulty: 'Easy' | 'Hard'
}