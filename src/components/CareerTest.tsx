import type {QuestionProp} from "../types";

type CareerTestProps = {
    currentQuestion: QuestionProp,
    isTestFinished: boolean
}

function CareerTest({currentQuestion, isTestFinished}: CareerTestProps) {

    return (
        <div id="careerTestContainer" className="w-[90%] h-96 border-1 shadow-md">
                <div>
                    {currentQuestion.text}
                </div>

        </div>
    )

}

export default CareerTest;