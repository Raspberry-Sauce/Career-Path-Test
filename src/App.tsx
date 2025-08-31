import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CareerPathTest from "./CareerPathTest";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<CareerPathTest/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
