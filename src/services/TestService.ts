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