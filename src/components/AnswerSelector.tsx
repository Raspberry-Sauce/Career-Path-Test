import {ReactNode} from "react";

type AnswerSelectorProps = {
    onAnswerSelect: (number) => void
}

const NUMBER_OF_ANSWERS = 8;

function AnswerSelector({onAnswerSelect}: AnswerSelectorProps)  {

    const clickableAnswers: ReactNode[] = [];

    for (let idx = 0; idx < NUMBER_OF_ANSWERS; idx++) {
        clickableAnswers.push(
            <button
                key={"answerSelectorCircle" + idx}
                onClick={() => onAnswerSelect(idx)}
                className="w-8 h-8 rounded-full border border-blue-500 text-white flex items-center justify-center cursor-pointer active:bg-blue-600"
            />
        );

        if (idx < NUMBER_OF_ANSWERS - 1) {
            clickableAnswers.push(
                <div key={"answerSelectorLine" + idx} className="flex-1 h-[1px] bg-blue-500" />
            );
        }
    }

    return (
        <div id="answerSelectorContainer" >
            <div className="flex items-center py-6">
                {clickableAnswers}
            </div>
            <div className="flex justify-between">
                <label>Strongly disagree</label>
                <label>Strongly agree</label>
            </div>
        </div>
    )
}

export default AnswerSelector;