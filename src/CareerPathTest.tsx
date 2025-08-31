import {useSearchParams} from "react-router-dom";
import InfoCard from "./components/InfoCard";
import CareerTest from "./components/CareerTest";
import {useEffect, useRef, useState} from "react";
import {answerTestQuestion, getQuestionForUser, getUserLatestSubmission} from "./services/TestService";

import type {QuestionProp, QuestionsListProp} from "./types";

function CareerPathTest() {

    const [user] = useSearchParams();
    const username: string = user.get("user")

    const [questions, setQuestions] = useState<QuestionsListProp | []>([]);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionProp>(null);
    const [percentComplete, setPercentComplete] = useState(0);
    const [loading, setLoading] = useState(true);
    const [testFinished, setTestFinished] = useState(false);
    const currentQuestionNumber = useRef<number>(1);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);

    useEffect(() => {
        getQuestionForUser(username).then(response => {
            setQuestions(response.questions);
            setNumberOfQuestions(response.questions?.length)
            setLoading(false);
            getFirstUnansweredQuestion(response.questions)


            getUserLatestSubmission(username).then(response => {
                console.log(response)
            })
            //TODO Check questions to see if test is finished
        }).catch(error => console.log("Error found getting test questions", error))
    }, [user])

    function getFirstUnansweredQuestion(questions) {
        setCurrentQuestion(questions[0]);
    }

    function answerQuestion(questionAnswer: number) {
        answerTestQuestion(questionAnswer, currentQuestion.id, username).then(() => {
            gotoNextQuestion();
        }).catch(error => console.log("Error saving question answer", error))
    }

    function gotoPreviousQuestion() {

    }

    function gotoNextQuestion() {
        const newQuestionNumber:number = currentQuestionNumber.current
        currentQuestionNumber.current = newQuestionNumber + 1;
        setCurrentQuestion(questions[newQuestionNumber])
    }

    return (
        <div
            id='careerPathTestContainer'
        >
            <div id="careerPathTestHeader">
                <img src={""} alt={"Career Path Test Home"}/>
                <h4>Career path test</h4>
                <h3>Discover careers that match your skills and personality</h3>
            </div>
            <div id="careerPathTestContentContainer" className="flex flex-col gap-8 justify-center items-center">
                <div id="careerPathTestInfoCards" className="flex flex-row justify-between gap-3">
                    <InfoCard
                        id="infoCard1"
                        mainText="24 Questions"
                        secondaryText="Answer 24 question about your working style and career preferences."
                        logoPath=""
                    />
                    <InfoCard
                        id="infoCard2"
                        mainText="2 Minutes"
                        secondaryText="Gain insights into your future career in just two minutes."
                        logoPath=""
                    />
                    <InfoCard
                        id="infoCard3"
                        mainText="Personalised advice"
                        secondaryText="Receive personalised advice to guide your on your next steps."
                        logoPath=""
                    />
                </div>
                <div id="careerPathTestAdditionalInfo">
                    <p>We've analysed data from thousands of our members who work in graduate roles across a range of sectors to understand which personalities, skills and values fit best for each career path.</p>
                    <p>Take this test to understand what career path you might be suited to and how to get started.</p>
                </div>
                {loading ?
                    <h4>Loading questions, this may take upto 30 seconds</h4> :
                    <CareerTest
                        isTestFinished={testFinished}
                        currentQuestion={currentQuestion}
                        totalQuestions={numberOfQuestions}
                        currentQuestionNumber={currentQuestionNumber.current}
                        percentageCompleted={percentComplete}
                        onQuestionAnswer={number => answerQuestion(number)}
                    />
                }
            </div>
        </div>
    )
}

export default CareerPathTest;