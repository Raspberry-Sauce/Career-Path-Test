import type {QuestionProp} from "../types";
import AnswerSelector from "./AnswerSelector";

type CareerTestProps = {
    currentQuestionNumber: number
    currentQuestion: QuestionProp,
    totalQuestions: number,
    isTestFinished: boolean,
    onQuestionAnswer: (number) => void
}

function CareerTest({currentQuestionNumber, totalQuestions, currentQuestion, isTestFinished, onQuestionAnswer}: CareerTestProps) {


    if (isTestFinished) {
        return (
            <div id="careerTestContainer" className="w-[90%] h-96 border-1 shadow-md px-24 py-4 flex flex-col gap-4">
                Test Completed
            </div>
        )
    }

    return (
        <div id="careerTestContainer" className="w-[90%] h-96 border-1 shadow-md px-24 py-4 flex flex-col gap-4">
            <div id="careerTestPercentage">
                <p>Your progress - {Math.floor((currentQuestionNumber - 1)/totalQuestions * 100)}%</p>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex gap-4 items-center">
                    <label className="text-amber-500">Q{currentQuestionNumber}/{totalQuestions}</label>
                    <label className="text-xs">In a job I would be motivated by</label>
                </div>
                <label className="font-bold">{currentQuestion.text}</label>
            </div>
            <AnswerSelector onAnswerSelect={answer => onQuestionAnswer(answer)}/>
        </div>
    )

}

export default CareerTest;