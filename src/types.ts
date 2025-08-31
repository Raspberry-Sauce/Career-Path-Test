export type QuestionProp = {
    id: string,
    text: string,
    answer?: number
}

export type QuestionsListProp = {
    questions: QuestionProp[]
}