import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "heading"}, 
    "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/*
<div id = "parent">
    <div id = "child">
        <h1> </h1>
        <h2> </h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div", 
    {id : "parent"},
    [
        React.createElement(
            "div",
            {id : "child1"},
            [
                React.createElement("h1", {}, "Namami React🚀!"),
                React.createElement("h2", {}, "I'm an <h2> tag!")
            ]      
        ),
        React.createElement(
            "div",
            {id : "child2"},
            [
                React.createElement("h1", {}, "I'm also an <h1> tag!"),
                React.createElement("h2", {}, "I'm also an <h2> tag!")
            ]      
        )    
]
);
//While creating the above scene, the code gets messier.
//This is when JSX come into picture. 

root.render(parent);