import React from "react";

function Dinner(props){ // The type of props is "object"
    return(
        <div>
            <h1>We are serving {props.dishName}</h1>
            <h1>We are serving {props.sweetDish}</h1>
        </div>
    )

}

export default Dinner

// In Js:
// The "object" is written as:
// var student {                // In Js "{}" shows "object", "[]" shows "array", "''" shows string etc
//    name: "Aleena"
//    course: "bootcamp"
// }
// student.name
// As we use object in Js same as it is we use props in react component


// It's a very bad practice to create different components in one js file, the good practice is that to create separate file for different component