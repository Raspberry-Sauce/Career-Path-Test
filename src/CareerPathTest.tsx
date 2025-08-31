import {useSearchParams} from "react-router-dom";
import InfoCard from "./components/InfoCard";
import CareerTest from "./components/CareerTest";
import {useEffect, useState} from "react";
import {getQuestionForUser} from "./services/TestService";

import type {QuestionProp} from "./types";

function CareerPathTest() {

    const [user] = useSearchParams();
    const username: string = user.get("user")

    const [questions, setQuestions] = useState<unknown>({});
    const [currentQuestion, setCurrentQuestion] = useState<QuestionProp>(null)
    const [loading, setLoading] = useState(true);
    const [testFinished, setTestFinished] = useState(false);

    useEffect(() => {
        getQuestionForUser(username).then(response => {
            setQuestions(response.questions);
            setLoading(false);
            getFirstUnansweredQuestion(response.questions)

            //TODO Check questions to see if test is finished
        }).catch(error => console.log("Error found getting test questions", error))
    }, [user])

    function getFirstUnansweredQuestion(questions) {
        setCurrentQuestion(questions[0]);
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
                    />
                }
            </div>
        </div>
    )
}

export default CareerPathTest;