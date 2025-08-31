export type QuestionProp = {
    id: string,
    text: string,
    latestSubmission?: string
}

export type QuestionsListProp = {
    questions: QuestionProp[]
}

export type AnswerProp = {
    questionId: string,
    answer: number,
}