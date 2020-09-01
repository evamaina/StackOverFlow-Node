import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const DashBoard = () => <h2>DashBoard</h2>;
const PostQuestion = () => <h2>Post Question</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/questions" component={DashBoard} />
                    <Route path="/questions/post" component={PostQuestion} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
