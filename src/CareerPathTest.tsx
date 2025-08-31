import {useSearchParams} from "react-router-dom";

function CareerPathTest() {

    const [user] = useSearchParams();
    const username: string = user.get("user")

    return (
        <div>
            This is the career path test
            Active User: {username}
        </div>
    )
}

export default CareerPathTest;