import {useSearchParams} from "react-router-dom";
import InfoCard from "./components/InfoCard";
import CareerTest from "./components/CareerTest";
import {useEffect, useRef, useState} from "react";
import {answerTestQuestion, getQuestionForUser, getUserLatestSubmission} from "./services/TestService";

import type {AnswerProp, QuestionProp} from "./types";

function CareerPathTest() {

    const [user] = useSearchParams();
    const username: string  = user.get("user") ?? "";

    const [questions, setQuestions] = useState<QuestionProp[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionProp | null>(null);
    const [loading, setLoading] = useState(true);
    const [testFinished, setTestFinished] = useState(false);
    const currentQuestionNumber = useRef<number>(1);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [answers, setAnswers] = useState<AnswerProp[]>([]);

    useEffect(() => {
        getQuestionForUser(username).then(questionsResponse => {
            setQuestions(questionsResponse.questions);
            getUserLatestSubmission(username).then(latestSubmissionResponse => {
                const latestResponse: string | void = latestSubmissionResponse.latestSubmission;
                const questionsLength: number = questionsResponse.questions?.length;
                if (latestResponse) {
                    setTestFinished(true);
                    setCurrentQuestion(questionsResponse.questions[0]);
                } else {
                    setCurrentQuestion(questionsResponse.questions[0]);
                }
                setNumberOfQuestions(questionsLength);
                setLoading(false);
            });
        }).catch(error => console.log("Error found getting test questions", error));
    }, [username]);


    function answerQuestion(questionAnswer: number) {
        const updatedAnswers: AnswerProp[] = answers;

        //TODO need to check here for previously submitted answers and replace if needed
        updatedAnswers.push({
            questionId: (currentQuestion as QuestionProp).id,
            answer: questionAnswer
        });

        setAnswers(updatedAnswers);

        if (currentQuestionNumber.current === numberOfQuestions) {
            submitTest();
        } else {
            gotoNextQuestion();
        }
    }

    function submitTest() {
        answerTestQuestion(answers, username).then(() => {
            setTestFinished(true);
        }).catch(error => console.log("Error saving question answer", error));
    }

    function gotoNextQuestion() {
        const newQuestionNumber: number = currentQuestionNumber.current;
        currentQuestionNumber.current = newQuestionNumber + 1;
        setCurrentQuestion(questions[newQuestionNumber]);
    }

    return (
        <div
            id='careerPathTestContainer'
        >
            <div id="careerPathTestHeader" className="relative inline-block shadow-sm">
                <img className="h-56 w-screen flex" src="https://fhc-frontend.onrender.com/assets/discover-journey-maze.svg" alt={"Career Path Test Home"}/>
                <label className="absolute bottom-12 left-4 px-8 py-1 font-bold text-3xl">Career path test</label>
                <label className="absolute bottom-4 left-4 px-8 py-1 text-2xl">Discover careers that match your skills and personality</label>
            </div>
            <div id="careerPathTestContentContainer" className="flex flex-col gap-8 justify-center items-center p-4">
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
                    currentQuestion && <CareerTest
                        isTestFinished={testFinished}
                        currentQuestion={currentQuestion}
                        totalQuestions={numberOfQuestions}
                        currentQuestionNumber={currentQuestionNumber.current}
                        onQuestionAnswer={number => answerQuestion(number)}
                    />
                }
            </div>
        </div>
    );
}

export default CareerPathTest;