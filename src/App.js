import React from "react"; // Must we uses this line to build a react component
// All libraries are installed in "node_modules", and react library is also installed in it
import Dinner from "./dinner"; // We are importing "Dinner" component because we are using "Dinner" Component in this file

function App() { // This is function in Js but it is component is react with name "App"
  // We use JSX in react component means we use HTML tags in the file of js and JSX start after return ( but in function we use only Js
  // This is the naming convention that the first letter will be capital of name of component e.g "App"
  return (
    <div>
    <h1>Hellow world from Aleena Irfan</h1>
    <h1>Hellow world from Aleena Irfan</h1> {/*we can't use same tag without <div></div>*/}
    <hr/>
    <div>
      <Dinner dishName="Chicken Karahi" sweetDish="Kheer"></Dinner>  {/*These are properties of props*/}
      {/* "Dinner" is a child component which are calling under "App" component, and "App" is a parent component*/}
      {/* We can call "Dinner" component as <Dinner dishName="Chicken Karahi" sweetDish="Kheer"/> */}
      <hr/>
      <Dinner dishName="Nehari" sweetDish="Jalybi"></Dinner>
      <hr/>
      <Dinner dishName="Pulao" sweetDish="Gajar ka Halwa"></Dinner> {/*We can also use child component for multiple times*/}
    </div>
    </div>
  

  );
}

export default App; // we are exporting this App component because we are using this component in other file e.g index.js
