import React, { useState, useContext } from "react";

var bookDetailContext = React.createContext(null);

 export default function ParentComponent() {
    var [bookDetails, setBookDetails] = useState({
        title: "Animal Farm",
        author: "George Orwell",
        published: 1945
    });
                                                
    return (
        <bookDetailContext.Provider value={bookDetails}>
            <h1>This is the Parent Component</h1>
            <hr/>
            <ChildComponent bookDetails={bookDetails}/>
        </bookDetailContext.Provider>                                         
        )
    }

    function ChildComponent(props) {
    return (
        <div>
            <h2>This is Child Component</h2>
            <hr/>
            <SubChildComponent />
        </div>
        )
    }

    function SubChildComponent(props) {
        var contextData = useContext(bookDetailContext);
    return (
        <div>
            <h3>This is Sub Child Component</h3>
            <h4>Book Title: {contextData.title}</h4>
            <h4>Book Author: {contextData.author}</h4>
            <h4>Book Published: {contextData.published}</h4>
        </div>
        )
    }