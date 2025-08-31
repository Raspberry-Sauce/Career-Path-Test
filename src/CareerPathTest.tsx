import {useSearchParams} from "react-router-dom";
import InfoCard from "./Components/InfoCard";
import CareerTest from "./Components/CareerTest";

function CareerPathTest() {

    const [user] = useSearchParams();
    const username: string = user.get("user")

    return (
        <div
            id='careerPathTestContainer'
        >
            <div id="careerPathTestHeader">
                <img src={""} alt={"Career Path Test Home"}/>
                <h4>Career path test</h4>
                <h3>Discover careers that match your skills and personailty</h3>
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
                <CareerTest/>
            </div>
        </div>
    )
}

export default CareerPathTest;