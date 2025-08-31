export const getQuestionForUser = (username: string) => {
    return fetch("https://fhc-api.onrender.com/questions?user=" + username, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        return response.json();
    });
};

export const getUserLatestSubmission = (username: string) => {
    return fetch("https://fhc-api.onrender.com/submissions?user=" + username, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        return response.json();
    });
}

export const answerTestQuestion = (answer:number, questionId: string, username: string) => {
    return fetch("https://fhc-api.onrender.com/submissions?user=" + username, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            answers: [
                {
                    questionId,
                    answer,
                },
            ],
        }),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        return response.json();
    });
}